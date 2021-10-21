import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntityOperator} from '@shared-utils/entity';
import {routerTransition} from '../../router.animations';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.css'],
  animations: [routerTransition()]
})
export class LogInfoComponent implements OnInit {

  submitData = {
    entityName: 'FadpLog',
    viewSize: 10,
    viewIndex: 0,
    noConditionFind: 'Y',
    hasTimestamp: 'N',
    orderBy: ['-visitDateTime'],
    condition: {conditionList: [], operator: EntityOperator.AND},
    fieldFormat: {visitDateTime: {format: 'yyyy-MM-dd HH:mm:ss.SSS'}}
  };

  dataList: Array<any>;
  listSize: number;
  page = 0;
  private currentViewSize: number;
  searchData: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getData();
  }

  searchLog() {
    this.submitData.viewIndex = 0;
    this.getData();
  }

  pageChange(event) {
    this.submitData.viewIndex = this.page - 1;
    this.getData();
  }

  getData() {

    const condition = {conditionList: [], operator: EntityOperator.AND};
    const fromDate = this.searchData.fromDate, toDate = this.searchData.toDate;
    const datePipe = new DatePipe('en');

    if (fromDate) {
      condition.conditionList.push({
        lhs: 'visitDateTime',
        operator: EntityOperator.GREATER_THAN_EQUAL_TO,
        rhs: datePipe.transform(fromDate, 'yyyy-MM-dd 00:00:00.000')
      });
    }

    if (toDate) {
      condition.conditionList.push({
        lhs: 'visitDateTime',
        operator: EntityOperator.LESS_THAN_EQUAL_TO,
        rhs: datePipe.transform(toDate, 'yyyy-MM-dd 23:59:59.000')
      });
    }

    if (this.searchData.operateContent) {
      condition.conditionList.push({lhs: 'operateContent', operator: EntityOperator.LIKE, rhs: '%' + this.searchData.operateContent + '%'});
    }
    if (this.searchData.userName) {
      condition.conditionList.push({lhs: 'userName', operator: EntityOperator.LIKE, rhs: '%' + this.searchData.userName + '%'});
    }
    if (this.searchData.userLoginId) {
      condition.conditionList.push({lhs: 'userLoginId', operator: EntityOperator.LIKE, rhs: '%' + this.searchData.userLoginId + '%'});
    }
    if (this.searchData.moduleName) {
      condition.conditionList.push({lhs: 'moduleName', operator: EntityOperator.LIKE, rhs: '%' + this.searchData.moduleName + '%'});
    }
    if (this.searchData.operateType) {
      condition.conditionList.push({lhs: 'operateType', operator: EntityOperator.LIKE, rhs: '%' + this.searchData.operateType + '%'});
    }

    this.submitData.condition = condition;
    this.http.post('getPageData', this.submitData).subscribe((data: any) => {
      this.submitData.viewIndex = this.submitData.viewIndex;
      this.listSize = data.listSize;
      this.currentViewSize = data.list.length;
      this.dataList = data.list;
    });
  }


}
