import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EntityFieldValidate, EntityOperator, FieldInfo} from '@shared-utils/entity';
import {UtilMisc} from '@shared-utils/misc';
import {UtilValidate} from '@shared-utils/validate';

export abstract class FieldInfoService {
  internalUiLabels = {};
  internalPKFieldList = [];
  internalSelectFieldList = [];
  internalOrderBy = [];

  fieldInfoMap: any = {}; // 字段map
  valueField; // 标识字段名
  showField; // 显示值字段名
  isMarkDelete = false; // 是否标记删除，默认为否
  deleteField = 'isDel'; // 是否标记删除
  selectDataLoaded: boolean;

  // 下拉框数据是否被加载过

  abstract get entityName(); // 主表实体名
  abstract get queryEntityName(); // 查询时使用的实体名，多数时候是一个视图
  abstract get _fieldInfo();

  submitQueryData;

  get orderBy() {
    return this.internalOrderBy;
  }

  public http: HttpClient;  // 须在子类构造方法中进行初始化赋值

  constructor() {
    console.log('FieldInfoService 构造');
  }

  init() {
    this.submitQueryData = {
      entityName: this.queryEntityName,
      viewSize: 10,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      orderBy: this.orderBy,
      condition: {conditionList: [], operator: EntityOperator.AND},
      fieldFormat: {}
    };
    this._fieldInfo.forEach(item => {
      this.internalUiLabels[item.fieldName] = item.fieldLabel;
      this.fieldInfoMap[item.fieldName] = item;
      if (item.PK === 'Y') {
        this.internalPKFieldList.push(item);
      }
      if (UtilValidate.isNotEmpty(item.dicId)) {
        // 配置了字典的，都加载字典数据
        this.internalSelectFieldList.push(item);
      }
      if (item.isValueField === 'Y') {
        this.valueField = item.fieldName;
      }
      if (item.isShowField === 'Y') {
        this.showField = item.fieldName;
      }
      if (item.fieldName === this.deleteField) {
        this.isMarkDelete = true;
      }
      if (item.orderBy === '-') {
        this.internalOrderBy.push('-' + item.fieldName);
      }
      if (item.orderBy === '+') {
        this.internalOrderBy.push(item.fieldName);
      }
    });
  }

  // 获取段列表
  get fieldInfo(): Array<FieldInfo> {
    return this._fieldInfo;
  }


  // 获取中英文对照map
  get uiLabels() {
    return this.internalUiLabels;
  }

  // 主键列表
  get PKFieldList(): Array<FieldInfo> {
    return this.internalPKFieldList;
  }

  get PKField(): FieldInfo {
    if (this.PKFieldList.length > 1) {
      throw new Error('实体' + this.entityName + '使用联合主键');
    } else {
      return this.PKFieldList[0];
    }
  }

  // 获取主键值
  getEntityPK(entity): Map<any, any> {
    const PKObj = {} as Map<any, any>;
    this.PKFieldList.forEach(PKField => {
      const fieldValue = entity[PKField.fieldName];
      if (fieldValue) {
        PKObj[PKField.fieldName] = fieldValue;
      }
    });
    return PKObj;
  }

  // 获取主键值
  getEntityPKValue(entity): any {
    if (this.PKFieldList.length > 1) {
      throw new Error('实体' + this.entityName + '使用联合主键');
    } else {
      return entity[this.PKField.fieldName];
    }
  }

  // 构造主键对象
  makePKValue(PK): any {
    if (this.PKFieldList.length > 1) {
      throw new Error('实体' + this.entityName + '使用联合主键');
    } else if (UtilValidate.isEmpty(PK)) {
      return null;
    } else {
      const PKObj: any = {};
      PKObj[this.PKField.fieldName] = PK;
      return PKObj;
    }
  }

  // 中英文对照
  uiLabel(field) {
    let label = field;
    if (this.uiLabels && this.uiLabels[field]) {
      label = this.uiLabels[field];
    }
    return label;
  }

  // 获取需要先拉选择的字段列表
  get selectFieldList() {
    return this.internalSelectFieldList;
  }

  /**
   * 1.初始化当前对象管理的所有下拉框数据.
   * 2.由第一个订阅其下拉框数据的订阅者触发ajax请求，将返回的数据暂存，其他下拉框从缓存中获取.
   * 3.为了使缓存刷新，缓存会在主页面切换（即路由变化时失效）.
   */
  loadSelectDataList() {
    this.selectDataLoaded = true;
    let beginLoading = false;
    let selectDataListMap = null;
    const waitList = [];
    this.selectFieldList.forEach(item => {
      // 为每一个下拉框数据源创建一个可观察对象，等到有数据时返回数据。

      item.selectDataList = new Observable(subscriber => {
        if (selectDataListMap) {
          // 有缓存
          subscriber.next(selectDataListMap[item.fieldName]);
        } else {
          // 数据没有初始化，将订阅者放入列表，等待ajax数据返回后，再将数据传给订阅者
          console.log('添加一个订阅');
          waitList.push(() => {
            subscriber.next(selectDataListMap[item.fieldName]);
          });
          console.log(waitList);
          if (!beginLoading) {
            // 发起http请求
            beginLoading = true;
            this.http.post('loadSelectDataList', {selectFieldList: this.selectFieldList}).subscribe((data: any) => {
              selectDataListMap = data;
              waitList.forEach(subCall => {
                // 通知所有订阅者
                subCall();
              });
            });
          }
        }
      });
    });
  }


  validateGenericValue(data): EntityFieldValidate {
    const validate: EntityFieldValidate = new EntityFieldValidate(data);

    this.fieldInfo.forEach(fieldInfo => {
      // const fieldValue = data[fieldInfo.fieldName];
      // console.log(fieldInfo.fieldName + ':' + fieldValue + ':' + UtilValidate.isNotEmpty(fieldValue));
      // if (UtilValidate.isNotEmpty(fieldValue)) {
      if (fieldInfo.required === 'Y' && fieldInfo.showInEdit === 'Y') {
        validate.required(fieldInfo);
      }
      this.formatFieldValue(data, fieldInfo);
      // }
    });
    return validate;
  }


  // 格式化数据
  formatFieldValue(obj, fieldInfo) {
    if (fieldInfo.fieldType === 'date') {
      obj[fieldInfo.fieldName] = UtilMisc.formatDate(obj[fieldInfo.fieldName], 'yyyy-MM-dd');
    } else if (fieldInfo.fieldType === 'dateTime') {
      obj[fieldInfo.fieldName] = UtilMisc.formatDate(obj[fieldInfo.fieldName], 'yyyy-MM-dd HH:mm:ss');
    }
  }

  makeValue(map) {
    const obj: any = {};
    this.fieldInfo.forEach(item => {
      obj[item.fieldName] = map[item.fieldName];
    });
    return obj;
  }

  getOne(submitQueryData): Observable<any> {
    return this.http.post('getOne', submitQueryData);
  }
  getPageData(submitQueryData): Observable<any> {
    return this.http.post('getPageData', submitQueryData);
  }
  genericSave(fieldMap): Observable<any> {
    return this.http.post('genericSave', {
      entityName: this.entityName,
      fieldMap,
      autoPK: true
    });
  }

  genericSaveAll(dataList): Observable<any> {
    return this.http.post('genericSaveAll', {
      entityName: this.entityName,
      autoPK: true,
      valueList: dataList
    });
  }

  deleteData(PK): Observable<any> {
    // 删除数据
    return this.http.post('genericDelete', {
      entityName: this.entityName,
      PK
    });
  }
}
