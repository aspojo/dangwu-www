import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwDemocratFieldInfoService} from './dw-democrat-field-info-service';
import {DwDemocratService} from './dw-democrat-service';

@Component({
  selector: 'app-list-dw-democrat',
  templateUrl: './list-dw-democrat.component.html',
  styleUrls: ['./list-dw-democrat.component.scss'],
  animations: [routerTransition()]
})
export class ListDwDemocratComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  showDataTableOnly = true;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwDemocratService,
    public fieldInfoService: DwDemocratFieldInfoService,
  ) {
    super();
  }
  // init() {
  //   this.http.post('getDemocrat', {}).subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }
  beforeQuery() {
    this.submitQueryData.viewSize = 0;
  }
}
