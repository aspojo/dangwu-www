import {EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {CommonComponent} from './common.component';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConditionExpr, EntityOperator, FieldInfo} from '@shared-utils/entity';
import {UtilValidate} from '@shared-utils/validate';
import {CommonViewDirective} from './view/common-view.directive';
import {UtilHttp} from '@shared-utils/http';
import {MessageService} from '@shared-services/message';
import {HandleTaskEvent} from '@shared-common/task';
import {ActivatedRoute} from '@angular/router';

export class CommonDataTable extends CommonComponent implements OnInit {
  public route: ActivatedRoute;
  public modalService: NgbModal;
  public compMapService: ComponentMapService;

  @Input() showPopUp: any = false; // 是否为弹出样式
  @Input() hasBackButton: any = false; // 是否有返回按钮
  @Input() showDataTableOnly = false; // 当前组件是否仅显示表格，不显示查询框
  @Input() queryData: any = {}; // 查询表单数据 , 可以接受外部传参
  @Input() defaultAddValue: any; // 添加数据时的默认值

  @Output() dataSavedEvent = new EventEmitter<Array<any>>(); // 数据保存事件
  @Output() dataDeleteEvent = new EventEmitter<Array<any>>(); // 数据删除事件

  @ViewChild(CommonViewDirective, {static: false}) viewDirective: CommonViewDirective; // 数据查看指令

  dataList: Array<any>; // 列表展示数据
  submitQueryData; // 提交查询的数据
  // 分页数据
  pageData: any;
  hasInited = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.hasInited = false;
    this.init();
  }

  init() {
    // 不可反复初始化
    if (this.hasInited) {
      return;
    }
    this.beforeInit();
    if (this.envService.notShowPopUp) {
      // 添加数据时的默认值通过url传递之前，经过了json序列化，这里需要反序列化为json对象
      this.queryData = JSON.parse(this.route.snapshot.queryParamMap.get('queryData'));
    }
    this.hasInited = true;
    this.dataList = null;
    this.submitQueryData = {
      entityName: this.fieldInfoService.queryEntityName,
      viewSize: 15,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      orderBy: this.fieldInfoService.orderBy,
      condition: {conditionList: [], operator: EntityOperator.AND},
      fieldFormat: {}
    };
    this.pageData = {
      listSize: 0,
      page: 1,
      pageChange: (event) => {
        this.submitQueryData.viewIndex = this.pageData.page - 1;
        this.loadDataList();
      }
    };
    this.loadDataList();
    this.fieldInfoService.loadSelectDataList();
  }

  get uiLabels() {
    return this.fieldInfoService.uiLabels;
  }

  get PKFieldList(): Array<FieldInfo> {
    return this.fieldInfoService.PKFieldList;
  }

  resetQueryForm() {
    Object.keys(this.queryData).forEach(key => {
      this.queryData[key] = null;
    });
  }

  // 查询表格数据
  loadDataList() {
    this.makeCondition();
    this.beforeQuery();
    this.fieldInfoService.getPageData(this.submitQueryData).subscribe((data: any) => {
      this.dataList = data.list;
      this.pageData.listSize = data.listSize;
      this.afterDataLoaded();
    });
  }

  makeCondition() {
    const datePipe = new DatePipe('en');
    const conditionList = [];
    this.submitQueryData.condition.conditionList = conditionList;
    this.fieldInfoService.fieldInfo.forEach(fieldInfo => {
      // UPDATE:不验证字段是否参与查询了
      // if (fieldInfo.showInQuery === 'Y') {
      this.fieldInfoService.formatFieldValue(this.queryData, fieldInfo);
      if (fieldInfo.fieldType === 'numeric' || fieldInfo.fieldType === 'date' || fieldInfo.fieldType === 'dateTime') {
        let value1 = this.queryData[fieldInfo.fieldName + '_fld0'];
        let value2 = this.queryData[fieldInfo.fieldName + '_fld1'];
        if (fieldInfo.fieldType === 'dateTime') {
          // FIXME: 这里保证了数据库时间类型的查询，但是若数据库存储的是字符串则可能异常？？
          if (value1) {
            value1 = datePipe.transform(value1, 'yyyy-MM-dd HH:mm:00.000');
          }
          if (value2) {
            value2 = datePipe.transform(value2, 'yyyy-MM-dd HH:mm:00.000');
          }
        }

        conditionList.push(new ConditionExpr(fieldInfo.fieldName, EntityOperator.GREATER_THAN_EQUAL_TO, value1));
        conditionList.push(new ConditionExpr(fieldInfo.fieldName, EntityOperator.LESS_THAN_EQUAL_TO, value2));
      } else if (fieldInfo.dicId || fieldInfo.relEntityName || (fieldInfo.component && fieldInfo.component.indexOf('select') > -1)) {
        if (this.queryData[fieldInfo.fieldName] !== 'null') {
          // 是选择值，不为null时才参与查询
          conditionList.push(new ConditionExpr(fieldInfo.fieldName, EntityOperator.EQUALS, this.queryData[fieldInfo.fieldName]));
        }
      } else if (this.queryData[fieldInfo.fieldName] === 'null') { // 查询空值
        conditionList.push(new ConditionExpr(fieldInfo.fieldName, EntityOperator.EQUALS, this.queryData[fieldInfo.fieldName]));
      } else if (UtilValidate.isNotEmpty(this.queryData[fieldInfo.fieldName])) {
        conditionList.push(new ConditionExpr(fieldInfo.fieldName, EntityOperator.LIKE, '%' + this.queryData[fieldInfo.fieldName] + '%'));
      }
      // }
    });
    if (this.fieldInfoService.isMarkDelete) {
      // 标记删除的数据查询时添加删除标记条件
      conditionList.push(new ConditionExpr(this.fieldInfoService.deleteField, EntityOperator.EQUALS, 'null'));
    }
  }


  // 字段中英文映射
  uiLabel(field) {
    return this.fieldInfoService.uiLabel(field);
  }


  deleteOne(data) {
    if (this.fieldInfoService.isMarkDelete) {
      this.markDeleteData([data]);
    } else {
      const pkList = [this.getEntityPK(data)];
      this.fieldInfoService.deleteData(pkList).subscribe(this.getDeleteCallback(pkList));
    }
  }

  deleteList() {
    if (this.fieldInfoService.isMarkDelete) {
      this.markDeleteData(this.selectedPK);
    } else {
      const pkList = this.selectedPK;
      this.fieldInfoService.deleteData(pkList).subscribe(this.getDeleteCallback(pkList));

    }
  }


  markDeleteData(saveDataList) {
    saveDataList.forEach(item => {
      item[this.fieldInfoService.deleteField] = 'Y';
    });
    this.fieldInfoService.genericSaveAll(saveDataList).subscribe(this.getDeleteCallback(saveDataList));
  }

  getDeleteCallback(PK) {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '删除完成！');
        // 触发数据删除事件
        this.dataDeleteEvent.emit(this.selectedPK);
        if (this.commonService.hasFlow) {
          this.deleteProcessInstance();
        }
        this.afterDataDeleted();
        this.loadDataList();
      }
    });
  }

  // 删除流程实例
  deleteProcessInstance() {
    const procInstIdList = [];
    this.selectedList.forEach((item) => {
      procInstIdList.push(item.procInstId);
    });
    this.http.post('removeProcessInstance', {procInstIdList}).subscribe(() => {
    });
  }

  // +++++++++++++++++++++++++++++++选择表数据开始++++++++++++++++++
  // 选择表数据
  checkItem(item) {
    item.checked = !item.checked;
  }

  // 全选
  checkAll() {
    const b = !this.isAllChecked;
    this.dataList.forEach((item: any) => {
      item.checked = b;
    });
  }

  // 是否全选
  get isAllChecked() {
    return (this.dataList != null) && (this.dataList.length > 0) && (this.checkedNum === this.dataList.length);
  }

  // 选中数目
  get checkedNum() {
    let checkedNum = 0;
    if (this.dataList) {
      this.dataList.forEach((item: any) => {
        checkedNum += (item.checked ? 1 : 0);
      });
    }
    // this.isAllChecked = (this.checkedNum === this.peopleList.length);
    return checkedNum;
  }

  // 获取选中的数据
  get selectedList(): Array<any> {
    const list = [];
    this.dataList.forEach(dataItem => {
      if (dataItem.checked) {
        list.push(dataItem);
      }
    });
    return list;
  }

  // 获取选中数据的主键
  get selectedPK(): Array<any> {
    const PKList = [];
    this.dataList.forEach(dataItem => {
      if (dataItem.checked) {
        PKList.push(this.getEntityPK(dataItem));
      }
    });
    return PKList;
  }

  // 获取实体数据的主键
  getEntityPK(entity) {
    return this.fieldInfoService.getEntityPK(entity);
  }


  // +++++++++++++++++++++++++++++++选择表数据结束++++++++++++++++++

  // 数据保存时触发的事件
  dataSaved(savedValue: any) {
    this.afterDataSaved(savedValue);
    this.loadDataList();
  }

  // 开始办理任务
  handleTask(event: HandleTaskEvent) {
    this.viewDirective = new CommonViewDirective(null, this.modalService);
    this.viewDirective.taskId = event.taskId;
    this.viewDirective.procInstId = event.procInstId;
    this.viewDirective.PK = event.PK;
    this.viewDirective.comp = event.handleTaskComponent;
    this.viewDirective.openView();
    this.viewDirective.handleTaskDoneEvent.subscribe(() => {
      this.loadDataList();
    });
  }

  canEdit(data) {
    if (this.commonService.hasFlow) {
      // 是流程开始节点同时流程没有被作废，才可编辑
      if (data.startTask === 'Y' && data.taskId) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  getComponentByName(name) {
    return this.compMapService.getComponentByName(name);
  }

  // +++++++++++++++++++++++++++++++平台生命周期事件++++++++++++++++++

  // 页面初始化之前执行，子类可重写
  beforeInit() {
  }

  /*
   发起查询http请求之前执行，子类可重写
   场景1：需要添加额外查询条件可以在这里处理
   beforeQuery() {
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('userId', EntityOperator.EQUALS, Auth.userData.userLoginId));
  }
   场景2：需要修改其他提交的参数，如添加格式化时间字段参数
   beforeQuery() {
    this.submitQueryData.fieldFormat = {taskCreateTime: {format: 'yyyy-MM-dd HH:mm:ss'}};
  }
   */
  beforeQuery() {

  }

  /*
  获取数据之后执行，子类可重写
  场景1：需要加工后台返回的数据
  afterDataLoaded() {
    this.dataList.forEach(item => {
      item.version = 'V.'+item.version;
    });
    super.afterDataLoaded();
  }
   */
  afterDataLoaded() {
  }

  /*
  数据保存之后执行，子类可重写
  场景1：主表数据保存后保存从表数据
   */
  afterDataSaved(savedValue: any) {
  }

  /*
  数据删除之后执行，子类可重写
   */
  afterDataDeleted() {
  }


}
