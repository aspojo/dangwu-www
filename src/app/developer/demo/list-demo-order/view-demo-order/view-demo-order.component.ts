import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DemoOrderFieldInfoService} from '../demo-order-field-info-service';
import {DemoOrderService} from '../demo-order-service';

@Component({
  selector: 'app-view-demo-order',
  templateUrl: './view-demo-order.component.html',
  styleUrls: ['./view-demo-order.component.scss'],
})
export class ViewDemoOrderComponent extends CommonViewComponent {
  @Input() viewDemoOrder: any;

  get viewData() {
    return this.viewDemoOrder;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DemoOrderService,
    public fieldInfoService: DemoOrderFieldInfoService,
  ) {
    super();
  }
}
