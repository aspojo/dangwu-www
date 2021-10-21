import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';
import {Observable} from 'rxjs';

@Injectable()
export class GenericCurdFieldInfoService extends FieldInfoService {


  dataSourceName;
  entityName;
  entityDescription;
  // get entityName() {
  //   return this._entityName;
  // }

  get queryEntityName() {
    return this.entityName;
  }

  _fieldInfo: Array<FieldInfo> = [];

  constructor(
    public http: HttpClient,
  ) {
    super();

  }

  //      {fieldName: 'userLoginId', fieldLabel: '操作人', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', component: 'selectUser', defaultValue: '$currentUser', },
  init(): Observable<any> {

    return new Observable(subscriber => {
      this.http.post('getCurrentUserFieldInfoList', {dataSourceName: this.dataSourceName, entityName: this.entityName}).subscribe((data: any) => {
        this._fieldInfo = data.fieldList as Array<FieldInfo>;
        this.entityDescription = data.description;
        super.init();
        this.isMarkDelete = false;
        subscriber.next();
      });
    });

  }

  superInit() {
    // 清空数据，并重新初始化
    this.internalPKFieldList.splice(0, this.internalPKFieldList.length);
    this.internalSelectFieldList.splice(0, this.internalSelectFieldList.length);
    this.internalOrderBy.splice(0, this.internalOrderBy.length);
    super.init();
  }

  getOne(submitQueryData): Observable<any> {
    submitQueryData.dataSourceName = this.dataSourceName;
    return this.http.post('getOne', submitQueryData);
  }

  getPageData(submitQueryData): Observable<any> {
    submitQueryData.dataSourceName = this.dataSourceName;
    return this.http.post('getPageData', submitQueryData);
  }

  genericSave(fieldMap): Observable<any> {
    return this.http.post('genericSave', {
      dataSourceName: this.dataSourceName,
      entityName: this.entityName,
      fieldMap: fieldMap,
      autoPK: true
    });
  }

  genericSaveAll(dataList): Observable<any> {
    return this.http.post('genericSaveAll', {
      dataSourceName: this.dataSourceName,
      entityName: this.entityName,
      autoPK: true,
      valueList: dataList
    });
  }

  deleteData(PK): Observable<any> {
    // 删除数据
    return this.http.post('genericDelete', {
      dataSourceName: this.dataSourceName,
      entityName: this.entityName,
      PK: PK
    });
  }

}


