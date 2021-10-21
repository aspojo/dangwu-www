import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DemocratManageFieldInfoService} from '../democrat-manage-field-info-service';
import {DemocratManageService} from '../democrat-manage-service';

@Component({
  selector: 'app-view-democrat-manage',
  templateUrl: './view-democrat-manage.component.html',
  styleUrls: ['./view-democrat-manage.component.scss'],
})
export class ViewDemocratManageComponent extends CommonViewComponent {
  @Input() viewDemocratManage: any;

  get viewData() {
    return this.viewDemocratManage;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DemocratManageService,
    public fieldInfoService: DemocratManageFieldInfoService,
  ) {
    super();
  }
}
