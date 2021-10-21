import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwFamilyFieldInfoService} from './dw-family-field-info-service';
import {DwFamilyService} from './dw-family-service';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {Auth} from '@shared-services/auth';

@Component({
  selector: 'app-list-dw-family',
  templateUrl: './list-dw-family.component.html',
  styleUrls: ['./list-dw-family.component.scss'],
  animations: [routerTransition()]
})
export class ListDwFamilyComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;
  @Input() queryData: any = {}; // 查询表单数据 , 可以接受外部传参

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwFamilyService,
    public fieldInfoService: DwFamilyFieldInfoService,
  ) {
    super();
  }

  beforeQuery() {
    this.submitQueryData.condition.conditionList.push(new ConditionExpr('pertymember', EntityOperator.EQUALS, this.queryData.pertymember));
  }
}
