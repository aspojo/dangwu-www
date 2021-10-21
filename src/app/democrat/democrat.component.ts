import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UtilHttp} from '@shared-utils/http';
import {MessageService} from '@shared-services/message';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {DwPertyMemberManageFieldInfoService} from '../pertymember/list-dw-perty-member-manage/dw-perty-member-manage-field-info-service';
import {DemocratManageService} from './democrat-manage-service';
import {DemocratManageFieldInfoService} from './democrat-manage-field-info-service';
import {Auth} from "@shared-services/auth";
import {Observable} from "rxjs";

@Component({
  selector: 'app-democrat',
  templateUrl: './democrat.component.html',
  styleUrls: ['./democrat.component.scss'],
  animations: [routerTransition()]
})
export class DemocratComponent extends CommonDataTable {
  @ViewChild('editGeneralPartyContent', {static: false}) editGeneralPartyContent: TemplateRef<any>;
  @ViewChild('editPhasesUpContent', {static: false}) editPhasesUpContent: TemplateRef<any>;
  public editGeneralPartyUpRef: NgbModalRef;
  public editPhasesUpRef: NgbModalRef;
  @Input() isQueryCollapsed = true;
  isOpratorCollapsed = false;
  editPhasesLabel: any;
  btnLevelUp = '积极';
  partyPhases = 1;
  model = 1;
  selectedNodeData: any; // 选中树节点数据
  phasesButtonText: any;
  downloadXlsBtnText: any;
  directPage = 1;
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DemocratManageService,
    public fieldInfoService: DemocratManageFieldInfoService,
    public democratManageService: DemocratManageService,
  ) {
    super();
  }

  beforeInit() {
    switch (this.model) {
      case 1:
        this.downloadXlsBtnText = '下载样表？';
        break;
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
    this.democratManageService.phases = this.model;

    let userGeneralPartyId = '0';
    if (Auth.userData.generalPartyId) {
      userGeneralPartyId = Auth.userData.generalPartyId;
    }
    this.http.post('getLetterTemplateList', {userGeneralPartyId: userGeneralPartyId}).subscribe( (data: any) => {
      this.democratManageService.letterTemplateList = new Observable((subscriber => {
        subscriber.next(data.letterTemplateList);
      }));
    });
  }

  // 树节点选中事件
  nodeSelect(selectedNodeData) {
    this.selectedNodeData = selectedNodeData;
    this.democratManageService.dataList = this.selectedNodeData;
    this.directPage = 1;
    this.searchDate();
    this.http.post('getOne', {entityName: 'DwGeneralParty', PK: {id: this.selectedNodeData.id}}).subscribe((data: any) => {
      this.democratManageService.currentBranch = data;
      if (data && data.parentId) {
        this.http.post('getOne', {entityName: 'DwGeneralParty', PK: {id: data.parentId}}).subscribe((data2: any) => {
          this.democratManageService.currentGeneral = data2;
        });
      }
    });
  }

  /**
   * 点击党员发展过程按钮
   */
  clickPartyPhasesButton() {
    this.btnLevelUpChange(this.model);
    this.loadDataList();
    this.democratManageService.phases = this.model;
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

  getMarkDeleteCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '删除完成！');
        this.loadDataList();
      }
    });
  }

  /**
   * 软删除，将history字段设为1
   */
  markDelete() {
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


  beforeQuery() {
    this.submitQueryData.entityName = 'DwPertyMember';
    // const partyPlist = [];
    // partyPlist.push(this.model.toString());
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('history', EntityOperator.NOT_EQUAL, 1));
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('democratmodel', EntityOperator.EQUALS, 1));
    if (this.selectedNodeData && this.selectedNodeData.id != 'root') {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('democrat', EntityOperator.EQUALS, this.selectedNodeData.id));
    }
  }
  searchDate() {
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
    this.http.post('getPertyMemberList',this.submitQueryData).subscribe((data: any) => {
      this.dataList = data.list;
      this.pageData.listSize = data.listSize;
      this.afterDataLoaded();
    });
  }

  enterToPage() {
    this.pageData.page = this.directPage;
    this.loadDataList();
  }

  pageChange(event) {
    this.pageData.pageChange(event);
    this.directPage = this.pageData.page;
  }
}
