import {Component, Input, Output} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CadresManageFieldInfoService} from './cadres-manage-field-info-service';
import {CadresManageService} from './cadres-manage-service';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {EditDwAssessmentComponent} from '../../other-entities/dw-assessment/list-dw-assessment/edit-dw-assessment/edit-dw-assessment.component';
import {UtilHttp} from '@shared-utils/http';
import {MessageService} from '@shared-services/message';
import {environment} from '@environments';
import {Auth} from '@shared-services/auth';

@Component({
  selector: 'app-list-cadres-manage',
  templateUrl: './list-cadres-manage.component.html',
  styleUrls: ['./list-cadres-manage.component.scss'],
  animations: [routerTransition()]
})
export class ListCadresManageComponent extends CommonDataTable {
  directPage = 1;
  @Input() isQueryCollapsed = false;
  isOpratorCollapsed = false;
  selectedNodeData: any; // 选中树节点数据
  model = 1;
  isBranchparty = false;
  partyQuery = '';
  treeCondition = new ConditionExpr('generalPartyHistory', EntityOperator.EQUALS, 0);
  countCondition = new ConditionExpr('cadresmodel', EntityOperator.EQUALS, 1);

  countPhasesList = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: CadresManageService,
    public fieldInfoService: CadresManageFieldInfoService,
    public editDwAssessmentComponent: EditDwAssessmentComponent,
    public cadresManageService: CadresManageService
  ) {
    super();
  }

  /**
   * 打开年度审核编辑框
   */
  saveAssessment() {
    this.cadresManageService.dataList = this.selectedPK;
  }

  // 树节点选中事件
  nodeSelect(selectedNodeData) {
    this.cadresManageService.generalParty = selectedNodeData;
    this.selectedNodeData = selectedNodeData;
    // if (this.model) {
    //   this.model = null;
    // }
    this.directPage = 1;
    this.searchData();
    // this.http.post('getOne', {entityName: 'DwGeneralParty', PK: {id: this.selectedNodeData.id}}).subscribe((data: any) => {
    //   if (data && data.parentId) {
    //     this.partyQuery = '&branchparty=' + this.selectedNodeData.id;
    //   } else {
    //     this.partyQuery = '&generalparty=' + this.selectedNodeData.id;
    //   }
    // });

    this.http.post('countCadresByPhases', {selectedId: this.selectedNodeData.id}).subscribe((data: any) => {
      if (data.generalParty && data.generalParty.parentId) {
        this.partyQuery = '&branchparty=' + this.selectedNodeData.id;
        this.isBranchparty = true;
      } else {
        this.partyQuery = '&generalparty=' + this.selectedNodeData.id;
        this.isBranchparty = false;
      }
      this.resetCount();
      data.countPhases.forEach(item => {
        this.countPhasesList[item.teacherexistingdutieslevel] = item.id;
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
      6: 0
    };
  }
  /**
   * 点击干部级别按钮
   */
  clickDutiesLevelButton(model) {
    this.directPage = 1;
    const nextId = model.nextId;
    this.model = nextId;
    this.searchData();
  }

  beforeInit() {
    this.fieldInfoService.init().subscribe(value => {
      super.init();
    });
    this.http.post('countCadresByPhases', {selectedId: 'root', generalId: Auth.userData.generalPartyId, viewPermissions: this.userData.viewPermissions}).subscribe((data: any) => {
      this.resetCount();
      data.countPhases.forEach(item => {
        this.countPhasesList[item.teacherexistingdutieslevel] = item.id;
      });
    });
  }

  /**
   * 添加查询条件
   */
  beforeQuery() {
    this.submitQueryData.entityName = 'DwPertyMember';
    this.cadresManageService.model = this.model;
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('teacherexistingdutieslevel', EntityOperator.EQUALS, this.model));
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('cadresmodel', EntityOperator.EQUALS, 1));
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('history', EntityOperator.NOT_EQUAL, 1));
    if (this.selectedNodeData && this.selectedNodeData.id !== 'root') {
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
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('generalparty', EntityOperator.IN, gid));
      }
    }
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

  getMarkDeleteCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '删除完成！');
        this.loadDataList();
      }
    });
  }

  exportPeopleInfo() {
    let PK = '&PK=';
    this.selectedPK.forEach(value => {
      PK = PK + value.id + '-';
    });
    window.location.href = environment.serverUrl + 'exportPeopleToXlsx/?all=0' + PK;
  }

  /**
   * 根据查询条件导出报表
   */
  exportPeopleInfoAll() {
    this.http.post('submitQueryData', this.submitQueryData).subscribe((data: any) => {
      window.location.href = environment.serverUrl + 'exportPeopleToXlsxByQueryData/?key=' + data.key;
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
      this.afterDataLoaded();
    });
  }

  get userData() {
    return Auth.userData;
  }

  pageChange(event) {
    this.pageData.pageChange(event);
    this.directPage = this.pageData.page;
  }
  enterToPage() {
    this.pageData.page = this.directPage;
    this.loadDataList();
  }
}
