import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {DemoOrderFieldInfoService} from '../demo-order-field-info-service';
import {DemoOrderService} from '../demo-order-service';
import {AttachmentService} from '@shared-services/attachment';

@Component({
  selector: 'app-edit-demo-order',
  templateUrl: './edit-demo-order.component.html',
  styleUrls: ['./edit-demo-order.component.scss'],
})
export class EditDemoOrderComponent extends CommonEditComponent {
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: DemoOrderService,
    public fieldInfoService: DemoOrderFieldInfoService,
    public attachmentService: AttachmentService,
  ) {
    super();
  }


}
