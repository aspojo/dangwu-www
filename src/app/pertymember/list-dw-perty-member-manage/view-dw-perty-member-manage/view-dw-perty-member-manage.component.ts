import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwPertyMemberManageFieldInfoService} from '../dw-perty-member-manage-field-info-service';
import {DwPertyMemberManageService} from '../dw-perty-member-manage-service';

@Component({
  selector: 'app-view-dw-perty-member-manage',
  templateUrl: './view-dw-perty-member-manage.component.html',
  styleUrls: ['./view-dw-perty-member-manage.component.scss'],
})
export class ViewDwPertyMemberManageComponent extends CommonViewComponent {
  @Input() viewDwPertyMemberManage: any;


  get viewData() {
    return this.viewDwPertyMemberManage;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwPertyMemberManageService,
    public fieldInfoService: DwPertyMemberManageFieldInfoService,
  ) {
    super();
  }
}
