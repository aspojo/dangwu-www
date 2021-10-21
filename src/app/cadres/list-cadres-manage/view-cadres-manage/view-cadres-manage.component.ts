import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {CadresManageFieldInfoService} from '../cadres-manage-field-info-service';
import {CadresManageService} from '../cadres-manage-service';

@Component({
  selector: 'app-view-cadres-manage',
  templateUrl: './view-cadres-manage.component.html',
  styleUrls: ['./view-cadres-manage.component.scss'],
})
export class ViewCadresManageComponent extends CommonViewComponent {
  @Input() viewCadresManage: any;

  get viewData() {
    return this.viewCadresManage;
  }

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: CadresManageService,
    public fieldInfoService: CadresManageFieldInfoService,
  ) {
    super();
  }
}
