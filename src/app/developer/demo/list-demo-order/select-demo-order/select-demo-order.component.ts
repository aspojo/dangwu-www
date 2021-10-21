import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DemoOrderFieldInfoService} from '../demo-order-field-info-service';
import {DemoOrderService} from '../demo-order-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDemoOrder]',
  templateUrl: './select-demo-order.component.html',
  styleUrls: ['./select-demo-order.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDemoOrderComponent, multi: true}
  ],
})
export class SelectDemoOrderComponent extends CommonSelectOne {
  @Input() selectDemoOrder; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DemoOrderService,
              public fieldInfoService: DemoOrderFieldInfoService,
    ) {
    super();
  }
}
