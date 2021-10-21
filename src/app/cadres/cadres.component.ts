import {Component, OnInit} from '@angular/core';
import {DicService} from '@shared-services/dic';
import {HttpClient} from '@angular/common/http';
import {ListDwPertyMemberComponent} from '../query/moreinfo/list-dw-perty-member/list-dw-perty-member.component';
import {EntityOperator} from '@shared-utils/entity';

@Component({
  selector: 'app-pertymember',
  templateUrl: './cadres.component.html',
  styleUrls: ['./cadres.component.scss'],

})
export class CadresComponent implements OnInit {
  model = 1;

  // selectUser: any; // 选中人员数据
  // selectUserList: any; // 人员下拉框选择数据
  selectedNodeData: any; // 选中树节点数据
  queryDataList = {cadresmodel: 1, teacherexistingdutieslevel: 1};

  constructor(public dicService: DicService, public http: HttpClient, public listDwPertyMemberComponent: ListDwPertyMemberComponent) {

  }


  ngOnInit() {
    // this.loadSelectUserList();
  }

  // 对象转字符串
  stringify(data) {
    return JSON.stringify(data);
  }

  // 树节点选中事件
  nodeSelect(selectedNodeData) {
    this.selectedNodeData = selectedNodeData;
    // console.log(this.selectedNodeData.id);
    // this.queryDataList.branchparty = this.selectedNodeData.id;
    // console.log(this.queryDataList);
  }

  /**
   * 点击干部级别按钮
   */
  clickPartyPhasesButton() {
    // this.listDwPertyMemberComponent.partyphases = this.model;
    this.queryDataList.teacherexistingdutieslevel = this.model;
    this.reloadDataList();
  }


  /**
   * 重新获取列表数据
   */
  reloadDataList() {
    this.listDwPertyMemberComponent.submitQueryData = {
      entityName: this.listDwPertyMemberComponent.fieldInfoService.queryEntityName,
      viewSize: 10,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      orderBy: this.listDwPertyMemberComponent.fieldInfoService.orderBy,
      condition: {conditionList: [], operator: EntityOperator.AND},
      fieldFormat: {}
    };
    this.listDwPertyMemberComponent.pageData = {
      listSize: 0,
      page: 1,
      pageChange: (event) => {
        this.listDwPertyMemberComponent.submitQueryData.viewIndex = this.listDwPertyMemberComponent.pageData.page - 1;
        // this.listDwPertyMemberComponent.loadDataList();
      }
    };
    this.listDwPertyMemberComponent.makeCondition();
    this.listDwPertyMemberComponent.beforeQuery();
    this.listDwPertyMemberComponent.fieldInfoService.getPageData(this.listDwPertyMemberComponent.submitQueryData).subscribe((data: any) => {
      this.listDwPertyMemberComponent.dataList = data.list;
      this.listDwPertyMemberComponent.pageData.listSize = data.listSize;
      this.listDwPertyMemberComponent.afterDataLoaded();
    });

  }
}




