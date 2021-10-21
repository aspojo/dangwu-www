import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwPertyMemberFieldInfoService} from '../dw-perty-member-field-info-service';
import {DwPertyMemberService} from '../dw-perty-member-service';

@Component({
  selector: 'app-view-dw-perty-member',
  templateUrl: './view-dw-perty-member.component.html',
  styleUrls: ['./view-dw-perty-member.component.scss'],
})
export class ViewDwPertyMemberComponent extends CommonViewComponent {
  @Input() viewDwPertyMember: any;

  get viewData() {
    return this.viewDwPertyMember;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwPertyMemberService,
    public fieldInfoService: DwPertyMemberFieldInfoService,
  ) {
    super();
  }
}
