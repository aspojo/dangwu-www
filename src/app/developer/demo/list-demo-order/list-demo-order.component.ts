import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DemoOrderFieldInfoService} from './demo-order-field-info-service';
import {DemoOrderService} from './demo-order-service';

@Component({
  selector: 'app-list-demo-order',
  templateUrl: './list-demo-order.component.html',
  styleUrls: ['./list-demo-order.component.scss'],
  animations: [routerTransition()]
})
export class ListDemoOrderComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DemoOrderService,
    public fieldInfoService: DemoOrderFieldInfoService,
  ) {
    super();
  }

}
