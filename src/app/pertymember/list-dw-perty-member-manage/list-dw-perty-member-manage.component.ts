import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DwPertyMemberManageFieldInfoService} from './dw-perty-member-manage-field-info-service';
import {DwPertyMemberManageService} from './dw-perty-member-manage-service';
import {UtilHttp} from '@shared-utils/http';
import {MessageService} from '@shared-services/message';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {environment} from '@environments';
import {Observable} from 'rxjs';
import {DatePipe} from '@angular/common';
import {EditDwRelationshipComponent} from '../../other-entities/dw-relationship/list-dw-relationship/edit-dw-relationship/edit-dw-relationship.component';
import {Auth} from '@shared-services/auth';

@Component({
  selector: 'app-list-dw-perty-member-manage',
  templateUrl: './list-dw-perty-member-manage.component.html',
  styleUrls: ['./list-dw-perty-member-manage.component.scss'],
  animations: [routerTransition()]
})
export class ListDwPertyMemberManageComponent extends CommonDataTable {
  generalPartySelectConditionList = [];
  directPage = 1;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwPertyMemberManageService,
    public fieldInfoService: DwPertyMemberManageFieldInfoService,
    public dwPertyMemberManageService: DwPertyMemberManageService,
  ) {
    super();
  }

  get valid() {
    if (this.errorList.length > 0) {
      this.errorList.forEach(item => {
        MessageService.showGlobalMessage('danger', item);
      });
    }
    return this.errorList.length === 0;
  }

  get relationshipExist() {

    return 1;
  }

  get userData() {
    return Auth.userData;
  }
  @ViewChild('editGeneralPartyContent', {static: false}) editGeneralPartyContent: TemplateRef<any>;
  @ViewChild('editPhasesUpContent', {static: false}) editPhasesUpContent: TemplateRef<any>;
  @ViewChild('batchIntoContent', {static: false}) batchIntoContent: TemplateRef<any>;
  @ViewChild('changeAllListContent', {static: false}) changeAllListContent: TemplateRef<any>;
  @ViewChild('batchAdapterContent', {static: false}) batchAdapterContent: TemplateRef<any>;
  @ViewChild('selectLetterTemplateContent', {static: false}) selectLetterTemplateContent: TemplateRef<any>;
  public selectLetterTemplateRef: NgbModalRef;

  public editGeneralPartyUpRef: NgbModalRef;
  public editPhasesUpRef: NgbModalRef;
  public batchIntoContentRef: NgbModalRef;
  public changeAllListRef: NgbModalRef;
  public batchAdapterContentRef: NgbModalRef;
  @Input() isQueryCollapsed = true;
  attachListData: any;
  attachAdapterListData = [];
  myCondition: any = {};
  isOpratorCollapsed = false;
  phasesUpTime: any;
  editPhasesLabel: any;
  btnLevelUp = '积极';
  partyPhases = 1;
  model = 1;
  partyQuery = '';
  selectedNodeData: any; // 选中树节点数据
  phasesUpSelect: any;
  changeGeneralparty: any;
  changeBranchparty: any;
  changeProfessional: any;
  phasesButtonText: any;
  downloadXlsBtnText: any;
  branchParentId: any;
  professionalParentId: any;
  errorList = [];
  currentGeneral: any;
  isBranchparty = false;
  treeCondition = new ConditionExpr('generalPartyHistory', EntityOperator.EQUALS, 0);
  countCondition = new ConditionExpr('pertymembermodel', EntityOperator.EQUALS, 1);
  comparisonSelectDataList: any;
  partyPhasesSelectDataList: any;
  mannerSelectDataList: any;
  partypostSelectDataList: any;
  pingyiSelectDataList: any;
  activeDate: any;
  countPhasesList = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  };

  letterTemplate: any; // 介绍信模板
  validity: any; // 有效期

  letterTemplateList: any;


  currentData: any;


  beforeInit() {
    this.fieldInfoService.init().subscribe(value => {
      super.init();
    });
    switch (this.model) {
      case 2:
        this.downloadXlsBtnText = '积极分子报表';
        break;
      case 3:
        this.downloadXlsBtnText = '党校学员报表';
        break;
      case 4:
        this.downloadXlsBtnText = '发展对象报表';
        break;
      case 5:
        this.downloadXlsBtnText = '预备党员报表';
        break;
      case 6:
        this.downloadXlsBtnText = '正式党员报表';
        break;
      case 7:
        this.downloadXlsBtnText = '转接报表';
        break;
    }
    this.dwPertyMemberManageService.phases = this.model;
    this.valueInit();
    this.loadSelectDataList();
    // this.loadCount();
    this.http.post('countPertyMemberByPhases', {selectedId: 'root', generalId: this.userData.generalPartyId, viewPermissions: this.userData.viewPermissions}).subscribe((data: any) => {
      this.resetCount();
      data.countPhases.forEach(item => {
        this.countPhasesList[item.phases] = item.id;
        if (item.adapter == 1) {
          this.countPhasesList['7'] = item.id;
        }
      });
    });
    if (Auth.userData.generalPartyId && Auth.userData.generalPartyId != '') {
      const arr = [];
      arr.push(Auth.userData.generalPartyId);
      if (Auth.userData.viewPermissions && Auth.userData.viewPermissions != '') {
        const firstIndex = Auth.userData.viewPermissions.indexOf(',');
        if (firstIndex > -1) {
          const viewArr = Auth.userData.viewPermissions.split(',');
          viewArr.forEach((v: any) => {
            arr.push(v);
          });
        } else {
          arr.push(Auth.userData.viewPermissions);
        }
      }
      this.generalPartySelectConditionList.push(new ConditionExpr('id', EntityOperator.IN, arr));

    }
  }


  loadCount() {
    this.http.post('countPertyMemberByPhases', {selectedId: this.selectedNodeData.id}).subscribe((data: any) => {
      this.resetCount();
      data.countPhases.forEach(item => {
        this.countPhasesList[item.phases] = item.id;
      });
    });
  }

  reset() {
    this.queryData = {};
    this.myCondition = {};
    this.valueInit();
  }

  valueInit() {
    this.myCondition.applicationdateComparison = 0;
    this.myCondition.activistsdateComparison = 0;
    this.myCondition.partyPhasesComparison = 0;
    this.myCondition.partyPhases = 0;
    this.myCondition.developmentdateComparison = 0;
    this.myCondition.probationarydateComparison = 0;
    this.myCondition.partymemberdateComparison = 0;
    this.myCondition.manner = 0;
    this.myCondition.partypostComparison = 0;
    this.myCondition.partypost = 0;
    this.myCondition.pingyi = 0;
  }

  // 树节点选中事件
  nodeSelect(selectedNodeData) {
    this.selectedNodeData = selectedNodeData;
    // console.log(this.selectedNodeData);
    this.dwPertyMemberManageService.dataList = this.selectedNodeData;
    // 点击党委树，不加载数据，点击级别才加载
    this.directPage = 1;
    this.searchData();
    this.http.post('countPertyMemberByPhases', {selectedId: this.selectedNodeData.id}).subscribe((data: any) => {
      this.dwPertyMemberManageService.currentBranch = data.generalParty;
      if (data.generalParty && data.generalParty.parentId) {
        this.partyQuery = '&branchparty=' + this.selectedNodeData.id;
        this.isBranchparty = true;
        this.dwPertyMemberManageService.currentGeneral = data.parentParty;
      } else {
        this.partyQuery = '&generalparty=' + this.selectedNodeData.id;
        this.isBranchparty = false;
      }
      this.resetCount();
      data.countPhases.forEach(item => {
        this.countPhasesList[item.phases] = item.id;
        if (item.adapter == 1) {
          this.countPhasesList['7'] = item.id;
        }
      });
    });
  }

  resetCount() {
    this.countPhasesList = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0
    };
  }

  /**
   * 加载下拉框数据
   */
  loadSelectDataList() {
    let userGeneralPartyId = '0';
    if (this.userData.generalPartyId) {
      userGeneralPartyId = this.userData.generalPartyId;
    }
    this.http.post('getPertyMemberListSelectData', {userGeneralPartyId}).subscribe((data: any) => {
      this.partyPhasesSelectDataList = new Observable((subscriber => {
        subscriber.next(data.partyPhasesSelectDataList);
      }));
      this.mannerSelectDataList = new Observable((subscriber => {
        subscriber.next(data.mannerSelectDataList);
      }));
      // 党组织模板
      this.letterTemplateList = new Observable((subscriber => {
        subscriber.next(data.letterTemplateList);
      }));
      this.dwPertyMemberManageService.letterTemplateList = this.letterTemplateList;
    });
    this.comparisonSelectDataList = new Observable((subscriber) => {
      const dataList = [{id: 0, value: '='}, {id: 1, value: '>'}, {id: 2, value: '>='}, {id: 3, value: '<'}, {id: 4, value: '<='}];
      subscriber.next(dataList);
    });
    this.pingyiSelectDataList = new Observable((subscriber) => {
      const dataList = [{id: '是', value: '是'}, {id: '否', value: '否'}, {id: 0, value: '不限'}];
      subscriber.next(dataList);
    });

  }

  /**
   * 点击党员发展过程按钮
   */
  clickPartyPhasesButton(model) {
    this.directPage = 1;
    const nextId = model.nextId;
    this.model = nextId;
    this.btnLevelUpChange(this.model);
    this.searchData();
    this.dwPertyMemberManageService.phases = this.model;
    switch (this.model) {
      case 2:
        this.downloadXlsBtnText = '积极分子报表';
        break;
      case 3:
        this.downloadXlsBtnText = '党校学员报表';
        break;
      case 4:
        this.downloadXlsBtnText = '发展对象报表';
        break;
      case 5:
        this.downloadXlsBtnText = '预备党员报表';
        break;
      case 6:
        this.downloadXlsBtnText = '正式党员报表';
        break;
      case 7:
        this.downloadXlsBtnText = '转接报表';
        break;
    }
  }

  btnLevelUpChange(i) {
    this.partyPhases = i;
    switch (i) {
      case 1:
        this.btnLevelUp = '积极';
        break;
      case 2:
        this.btnLevelUp = '党校';
        break;
      case 3:
        this.btnLevelUp = '发展';
        break;
      case 4:
        this.btnLevelUp = '';
        break;
      case 5:
        this.btnLevelUp = '转正';
        break;
      case 6:
        this.btnLevelUp = '';
        break;
      default:
        this.btnLevelUp = '';
    }
  }

  /**
   * 党员阶段提升
   */
  partyPhaseLevelUp() {
    this.phasesUpTime = '';
    this.phasesUpSelect = '';
    // 若登录账号为下级管理员，则需要判断是是否勾选了教工，下级管理员不允许修改教工状态
    let isContinue = true;
    if (this.userData.generalPartyId) {
      const selectedList = this.selectedList;
      console.log(selectedList);
      selectedList.forEach((data: any) => {
        if (data.identity === '1') { // 老师
          MessageService.showGlobalMessage('danger', '请勿操作教工的阶段信息');
          isContinue = false;
          return;
        }
      });
    }
    if (!isContinue) {
      return;
    }
    switch (this.model) {
      case 1:
        this.phasesButtonText = '转积极分子';
        this.editPhasesLabel = '积极分子时间';
        break;
      case 2:
        this.phasesButtonText = '推荐为党校学员';
        this.editPhasesLabel = '党校期数';
        break;
      case 3:
        this.phasesButtonText = '确认为发展对象';
        this.editPhasesLabel = '发展对象时间';
        break;
      case 5:
        this.phasesButtonText = '转为正式党员';
        this.editPhasesLabel = '转正时间';
        break;
    }
    this.editPhasesUpRef = this.modalService.open(this.editPhasesUpContent);
  }


  getLevelUpCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '修改完成！');
        this.loadDataList();
      }
    });
  }

  getMarkDeleteCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '删除完成！');
        this.loadDataList();
      }
    });
  }

  /**
   * 党员阶段后退
   */
  partyPhasesLevelDown() {
    let isContinue = true;
    if (this.userData.generalPartyId) {
      const selectedList = this.selectedList;
      selectedList.forEach((data: any) => {
        if (data.identity === '1') { // 老师
          MessageService.showGlobalMessage('danger', '请勿操作教工的阶段信息');
          isContinue = false;
          return;
        }
      });
    }
    if (!isContinue) {
      return;
    }
    const pkList = this.selectedPK;
    // 后退同时，要删除该阶段的信息，如时间、党校期数、志愿书编号等
    console.log('this.partyPhases' + this.partyPhases);
    if (this.partyPhases == 7) {
      // 关系转接的党员，点击这个将取消转接
      const newList = [];
      for (let i = 0; i < pkList.length; i++) {
        const newDept: any = {};
        newDept.id = pkList[i].id;
        newDept.adapter = 0;
        newList.push(newDept);
      }
      this.http.post('genericSaveAll', {
        entityName: 'DwPertyMember',
        valueList: newList
      }).subscribe((data: any) => {
        this.loadDataList();
      });
    } else {
      this.fieldInfoService.partyPhasesUpdateData(pkList, this.partyPhases - 1).subscribe(this.getLevelUpCallback());
    }
  }

  /**
   * 软删除，将history字段设为1
   */
  markDelete() {
    let isContinue = true;
    if (this.userData.generalPartyId) {
      const selectedList = this.selectedList;
      console.log(selectedList);
      selectedList.forEach((data: any) => {
        if (data.identity === '1') { // 老师
          MessageService.showGlobalMessage('danger', '请勿删除教工');
          isContinue = false;
          return;
        }
      });
    }
    if(!isContinue) {
      return;
    }
    const pkList = this.selectedPK;
    const newList = [];
    for (let i = 0; i < pkList.length; i++) {
      const newDept: any = {};
      newDept.id = pkList[i].id;
      newDept.history = 1;
      newList.push(newDept);
    }
    this.fieldInfoService.markDelete(newList).subscribe(this.getMarkDeleteCallback());
  }

  delete() {
    let isContinue = true;
    if (this.userData.generalPartyId) {
      const selectedList = this.selectedList;
      console.log(selectedList);
      selectedList.forEach((data: any) => {
        if (data.identity === '1') { // 老师
          MessageService.showGlobalMessage('danger', '请勿删除教工');
          isContinue = false;
          return;
        }
      });
    }
    if (!isContinue) {
      return;
    }
    this.deleteList();
  }


  enterToPage() {
    this.pageData.page = this.directPage;
    this.loadDataList();
  }

  pageChange(event) {
    this.pageData.pageChange(event);
    this.directPage = this.pageData.page;
  }

  beforeQuery() {
    this.submitQueryData.entityName = 'DwPertyMember';
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('history', EntityOperator.NOT_EQUAL, 1));
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('pertymembermodel', EntityOperator.EQUALS, 1));
    if (this.model == 7) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('adapter', EntityOperator.EQUALS, 1));
    } else {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('phases', EntityOperator.EQUALS, this.model));
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('adapter', EntityOperator.EQUALS, 0));
    }
    if (this.selectedNodeData && this.selectedNodeData.id != 'root') {
      const con1 = new ConditionExpr('generalparty', EntityOperator.EQUALS, this.selectedNodeData.id);
      const con2 = new ConditionExpr('branchparty', EntityOperator.EQUALS, this.selectedNodeData.id);
      this.submitQueryData.condition.conditionList.push({operator: EntityOperator.OR, conditionList: [con1, con2]});
    } else {
      if (this.userData.generalPartyId) {
        const gid = [];
        gid.push(this.userData.generalPartyId);
        if (this.userData.viewPermissions) {
          const viewId = this.userData.viewPermissions.split(',');
          viewId.forEach((item: string) => {
            gid.push(item);
          });
        }
        // this.submitQueryData.condition.conditionList.push(new ConditionExpr('generalparty', EntityOperator.EQUALS, this.userData.generalPartyId));
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('generalparty', EntityOperator.IN, gid));
      }
    }
    // 申请时间
    const datePipe = new DatePipe('en');
    if (this.myCondition.applicantdate) {
      const value = datePipe.transform(this.myCondition.applicantdate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.applicationdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('applicantdate', entityOperator, value));
      }
    }
    // 积极分子时间
    if (this.myCondition.activistsdate) {
      const value = datePipe.transform(this.myCondition.activistsdate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.activistsdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('activistsdate', entityOperator, value));
      }
    }
    // 党校
    if (this.myCondition.partyPhases && this.myCondition.partyPhases != '0') {
      const entityOperator = this.operator(this.myCondition.activistsdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('partyPhases', entityOperator, this.myCondition.partyPhases));
      }
    }
    // 发展对象时间
    if (this.myCondition.developmentdate) {
      const value = datePipe.transform(this.myCondition.developmentdate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.developmentdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('developmentdate', entityOperator, value));
      }
    }
    // 预备党员时间
    if (this.myCondition.probationarydate) {
      const value = datePipe.transform(this.myCondition.probationarydate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.probationarydateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('probationarydate', entityOperator, value));
      }
    }
    // 转正时间
    if (this.myCondition.partymemberdate) {
      const value = datePipe.transform(this.myCondition.partymemberdate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.partymemberdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('partymemberdate', entityOperator, value));
      }
    }
    // 党员增加
    if (this.myCondition.manner != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('manner', EntityOperator.EQUALS, this.myCondition.manner));
    }
    // 党内职务
    if (this.myCondition.partypost && this.myCondition.partypost != '0') {
      const entityOperator = this.operator(this.myCondition.partypostComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('partypost', entityOperator, this.myCondition.partypost));
      }
    }
    // 党员评议
    if (this.myCondition.pingyi != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('pingyi', EntityOperator.EQUALS, this.myCondition.pingyi));
    }
  }

  /**
   * 比较运算符
   */
  operator(index) {
    switch (index) {
      case 0:
        return EntityOperator.EQUALS;
      case '0':
        return EntityOperator.EQUALS;
      case '1':
        return EntityOperator.GREATER_THAN;
      case '2':
        return EntityOperator.GREATER_THAN_EQUAL_TO;
      case '3':
        return EntityOperator.LESS_THAN;
      case '4':
        return EntityOperator.LESS_THAN_EQUAL_TO;
      default:
        return 'false';
    }
  }

  /**
   * 弹出更改支部
   */
  changeGeneralParty() {
    this.editGeneralPartyUpRef = this.modalService.open(this.editGeneralPartyContent);
  }

  /**
   * 选择党委id是选择支部查询父节点的条件
   */
  getParentParty(event) {
    // this.GeneralParentId = event.id;
  }

  /**
   * 保存党员阶段进阶
   */
  savePhasesUp() {
    // 需要先获取所选人员的预备党员时间
    const selectedList = this.selectedList;
    const newList = [];
    for (let i = 0; i < selectedList.length; i++) {
      const newDept: any = {};
      newDept.id = selectedList[i].id;
      newDept.phases = Number(this.model) + 1;
      // 成为党校学员只需填写党校期数，其他的需要填写时间
      if (this.model != 2 && this.phasesUpTime) {
        if (!this.phasesUpTime.match(/\d{4}-\d{2}-\d{2}/)) {
          MessageService.showGlobalMessage('danger', '时间格式错误！');
          return;
        } else if (this.checkDateInpu(this.phasesUpTime)) {
          MessageService.showGlobalMessage('danger', '日期不得超过今天！');
          return;
        }
        switch (this.model) {
          case 1:
            newDept.activistsdate = this.phasesUpTime;
            break;
          case 3:
            newDept.developmentdate = this.phasesUpTime;
            break;
          case 5:
            // 需要遍历检查预备党员是否满1年
            if (this.checkOneYear(new Date(this.phasesUpTime), selectedList[i].probationarydate)) {
              MessageService.showGlobalMessage('danger', '预备党员未满1年！');
              return;
            }
            newDept.partymemberdate = this.phasesUpTime;
            break;
        }
      } else {
        newDept.partyPhases = this.phasesUpSelect;
      }
      newList.push(newDept);
    }
    this.fieldInfoService.updateData(newList).subscribe(this.getUpdateCallback());
    this.editPhasesUpRef.close();
    this.phasesUpSelect = null;
    this.phasesUpTime = null;
    this.loadDataList();
  }

  getUpdateCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '修改成功！');
      }
    });
  }

  /**
   * 检测预备党员是否满1年
   */
  checkOneYear(date, probationarydate) {
    const arr = probationarydate.split('-');
    if (date.getFullYear() - arr[0] > 1) {
      return false;
    } else if (date.getFullYear() - arr[0] == 1) {
      if (date.getMonth() > arr[1] - 1) {
        return false;
      } else if (date.getMonth() == arr[1] - 1) {
        if (date.getDate() >= arr[2]) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * 检测输入日期是否超过今天
   */
  checkDateInpu(date) {
    const today = new Date();
    const arr = date.split('-');
    if (today.getFullYear() - arr[0] > 0) {
      return false;
    } else if (today.getFullYear() - arr[0] == 0) {
      if (today.getMonth() > arr[1] - 1) {
        return false;
      } else if (today.getMonth() == arr[1] - 1) {
        if (today.getDate() >= arr[2]) {
          return false;
        }
      }
    }
    return true;
  }

  getBranchParty(event) {
    if (event) {
      this.branchParentId = event.parentId;
    }
  }

  getProfessional(event) {
    if (event) {
      this.professionalParentId = event.generalId;
    }
  }

  /**
   * 保存党支部变更
   */
  saveGeneralChanged() {
    // 判断支部和专业是否属于所选党委，判断通过才能提交
    if (this.branchParentId !== this.changeGeneralparty) {
      this.errorList.push('所选支部不属于所选党委');
    }
    if (this.changeProfessional && this.changeProfessional != 'null') {
      if (this.professionalParentId !== this.changeGeneralparty) {
        this.errorList.push('所选专业不属于所选党委');
      }
    }
    if (this.valid) {
      const newList = [];
      const PKList = this.selectedPK;
      if (this.changeProfessional && this.changeProfessional != 'null') {
        for (let i = 0; i < PKList.length; i++) {
          const newDept: any = {};
          newDept.id = PKList[i].id;
          newDept.generalparty = this.changeGeneralparty;
          newDept.branchparty = this.changeBranchparty;
          newDept.studentprofessional = this.changeProfessional;
          newList.push(newDept);
        }
      } else {
        for (let i = 0; i < PKList.length; i++) {
          const newDept: any = {};
          newDept.id = PKList[i].id;
          newDept.generalparty = this.changeGeneralparty;
          newDept.branchparty = this.changeBranchparty;
          newDept.studentprofessional = 'null';
          newList.push(newDept);
        }
      }
      this.fieldInfoService.updateData(newList).subscribe(this.getUpdateCallback());
      this.changeGeneralparty = 'null';
      this.changeBranchparty = 'null';
      this.changeProfessional = 'null';
      this.editGeneralPartyUpRef.close();
      this.loadDataList();
    } else {
      this.errorList = [];
    }
  }

  /**
   * 导出选中人员
   */
  exportPeopleInfo() {
    let PK = '&PK=';
    this.selectedPK.forEach(value => {
      PK = PK + value.id + '-';
    });
    window.location.href = environment.serverUrl + 'exportPeopleToXlsx/?all=0&userId=' + Auth.userData.userLoginId + PK;
  }

  /**
   * 打开批量导入的弹窗
   */
  batchInto() {
    this.batchIntoContentRef = this.modalService.open(this.batchIntoContent, {size: 'lg'});
  }

  /**
   * 执行  提交保存数据操作
   */
  doBatchInto() {
    this.http.post('addPertyMemberFromExcel', {
      filePath: this.attachListData,
      generalparty: this.dwPertyMemberManageService.currentGeneral.id,
      branchparty: this.dwPertyMemberManageService.currentBranch.id
    }).subscribe((data: any) => {
      if (data.errorList) {
        data.errorList.forEach(i => {
          MessageService.showGlobalMessage('danger', i);
        });
      } else {
        MessageService.showGlobalMessage('success', '提交成功');
        this.batchIntoContentRef.close();
        this.loadDataList();
      }
    });
  }

  // 对象转字符串
  stringify(data) {
    return JSON.stringify(data);
  }

  /**
   * 根据查询条件导出报表
   */
  exportPeopleInfoAll() {
    this.http.post('submitQueryData', this.submitQueryData).subscribe((data: any) => {
      window.location.href = environment.serverUrl + 'exportPeopleToXlsxByQueryDataFormat/?key=' + data.key + '&userId=' + Auth.userData.userLoginId;
    });
  }
  /**
   * 根据查询条件导出报表
   */
  exportPartyMemberFormsXlsx() {
    this.http.post('submitQueryData', this.submitQueryData).subscribe((data: any) => {
      window.location.href = environment.serverUrl + 'exportPartyMemberFormsXlsx/?phases=' + this.model + '&uid=' + this.userData.userLoginId + this.partyQuery + '&key=' + data.key;
    });
  }

  openChangeAllList() {
    this.changeAllListRef = this.modalService.open(this.changeAllListContent);
  }

  /**
   * 根据查询条件，全部确认为积极分子/转接
   */
  changeAllList() {
    if (this.model === 1) {
      this.http.post('changePartyPhasesByQueryData', {condition: this.submitQueryData.condition, activedate: this.activeDate}).subscribe((data: any) => {
        if (UtilHttp.notHasError(data)) {
          MessageService.showGlobalMessage('success', '操作成功');
          this.changeAllListRef.close();
          this.loadDataList();
        }
      });
    } else if (this.model === 6) {
      // 全部转接
      this.http.post('changeAdapterByQueryData', {condition: this.submitQueryData.condition}).subscribe((data: any) => {
        if (UtilHttp.notHasError(data)) {
          MessageService.showGlobalMessage('success', '操作成功');
          this.loadDataList();
        }
      });
    }
  }

  /**
   * adapter设置为1，移至关系转接列表显示
   */
  changeAdapter() {
    const selectedList = this.selectedList;
    let isContinue = true;
    if (this.userData.generalPartyId) {
      selectedList.forEach((data: any) => {
        if (data.identity === '1') { // 老师
          MessageService.showGlobalMessage('danger', '请勿操作教工的阶段信息');
          isContinue = false;
          return;
        }
      });
    }
    if (!isContinue) {
      return;
    }
    const newList = [];
    for (let i = 0; i < selectedList.length; i++) {
      const newDept: any = {};
      newDept.id = selectedList[i].id;
      newDept.adapter = 1;
      newList.push(newDept);
    }
    this.fieldInfoService.updateData(newList).subscribe(this.getUpdateCallback());
    this.loadDataList();
  }

  /**
   * 打开上传批量转接文件的框
   */
  openBatchChangeAdapter() {
    let isContinue = true;
    if (this.userData.generalPartyId) {
      const selectedList = this.selectedList;
      selectedList.forEach((data: any) => {
        if (data.identity === '1') { // 老师
          MessageService.showGlobalMessage('danger', '请勿操作教工的党员信息');
          isContinue = false;
          return;
        }
      });
    }
    if (!isContinue) {
      return;
    }
    this.batchAdapterContentRef = this.modalService.open(this.batchAdapterContent);
  }

  doBatchAdapter() {
    this.http.post('addRelationshipFromExcel', {
      filePath: this.attachAdapterListData,
    }).subscribe((data: any) => {
      if (data.errorList) {
        data.errorList.forEach(i => {
          MessageService.showGlobalMessage('danger', i);
        });
      } else {
        MessageService.showGlobalMessage('success', '提交成功');
        this.batchAdapterContentRef.close();
        this.loadDataList();
      }
    });
  }

  getDwRelationshipComponent() {
    return EditDwRelationshipComponent;
  }

  afterDataLoaded() {
    if (this.model === 7) {
      const idList = [];
      this.dataList.forEach((data: any) => {
        if (data.birthday) {
          data.birthday = data.birthday.substring(0, 7).replace('-', '.');
        }
        idList.push(data.id);
      });
      // 发送到后台，查询relationship表是否有数据
      this.http.post('getRelationshipExist', {pertymember: idList}).subscribe((data: any) => {
        if (data.size > 0) {
          this.dataList.forEach((data2: any) => {
            if (data.list.indexOf(data2.id) !== -1) {
              data2.relationship = true;
            }
          });
        }
      });
    } else {
      this.dataList.forEach((data: any) => {
        if (data.birthday) {
          data.birthday = data.birthday.substring(0, 7).replace('-', '.');
        }
      });
    }
    // 计算年龄
    this.dataList.forEach((item: any) => {
      const birDate = new Date(item.birthday);
      const now = new Date();
      item.age = now.getFullYear() - birDate.getFullYear() - ((now.getMonth() < birDate.getMonth() || (now.getMonth() == birDate.getMonth() && now.getDate() < birDate.getDate())) ? 1 : 0);
    });
  }

  searchData() {
    this.pageData.page = 1;
    this.submitQueryData.viewIndex = 0;
    this.loadDataList();
  }

  loadDataList() {
    this.makeCondition();
    this.beforeQuery();
    // this.fieldInfoService.getPageData(this.submitQueryData).subscribe((data: any) => {
    //   this.dataList = data.list;
    //   this.pageData.listSize = data.listSize;
    //   this.afterDataLoaded();
    // });
    this.http.post('getPertyMemberList', this.submitQueryData).subscribe((data: any) => {
      this.dataList = data.list;
      this.pageData.listSize = data.listSize;
      console.log(data.countPhases);
      this.afterDataLoaded();
    });
  }
  /**
   * 打开上传批量转接文件的框
   */
  openBatchChange(data) {
    // // 是否为分党委组织的管理员
    // if (this.userData.generalPartyId) {
    //
    // } else {
    //   // 拥有学校权限
    //
    // }
    this.currentData = data;

    this.letterTemplate = '';
    this.validity = '';

    this.selectLetterTemplateRef = this.modalService.open(this.selectLetterTemplateContent);
  }


  /**
   * 打印转接
   */
  pinrtTransfer() {
    window.open(environment.serverUrl + 'viewRelationship/?id=' + this.currentData.id + '&html=1&letterTemplate=' + this.letterTemplate + '&validity=' + this.validity);
  }
}
