import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DemoOrderFieldInfoService} from '../../demo-order-field-info-service';
import {DemoOrderService} from '../../demo-order-service';



@Component({
  selector: 'app-view-demo-order-base-info',
  templateUrl: './view-demo-order-base-info.component.html',
})
export class ViewDemoOrderBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DemoOrderService,
              public fieldInfoService: DemoOrderFieldInfoService,
  ) {
    super();
  }
}
