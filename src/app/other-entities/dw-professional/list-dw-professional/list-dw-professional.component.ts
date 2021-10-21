import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwProfessionalFieldInfoService} from './dw-professional-field-info-service';
import {DwProfessionalService} from './dw-professional-service';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {Auth} from '@shared-services/auth';
import {Observable} from 'rxjs';
import {MessageService} from '@shared-services/message';

@Component({
  selector: 'app-list-dw-professional',
  templateUrl: './list-dw-professional.component.html',
  styleUrls: ['./list-dw-professional.component.scss'],
  animations: [routerTransition()]
})
export class ListDwProfessionalComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;
  @Input() conditionList: any;

  professionalHistoryList: any;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwProfessionalService,
    public fieldInfoService: DwProfessionalFieldInfoService,
  ) {
    super();
    this.queryData.professionalHistory = '0';
    this.professionalHistoryList = new Observable((subscriber) => {
      const dataList = [{id: '0', value: '现有'}, {id: '1', value: '历史'}];
      subscriber.next(dataList);
    });
  }

  beforeQuery() {
    const generalId = Auth.userData.generalPartyId == null ? 0 : Auth.userData.generalPartyId;
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('generalId', EntityOperator.EQUALS, generalId));

  }

  /**
   * 标记删除去，转为历史
   * @param item
   */
  confirmHistory(item) {
    item.professionalHistory = '1';
    // return;
    this.http.post('genericSave', {
      entityName: 'DwProfessional',
      fieldMap: item,
      autoPK: true
    }).subscribe((data: any) => {
      this.loadDataList();
      MessageService.showGlobalMessage('success', '标记删除成功');
    });
  }

  /**
   * 恢复标记删除
   * @param item
   */
  confirmRecovery(item) {
    item.professionalHistory = '0';
    this.http.post('genericSave', {
      entityName: 'DwProfessional',
      fieldMap: item,
      autoPK: true
    }).subscribe((data: any) => {
      this.loadDataList();
      MessageService.showGlobalMessage('success', '恢复成功');
    });
  }
}
