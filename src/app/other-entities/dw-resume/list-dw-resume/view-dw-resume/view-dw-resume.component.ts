import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwResumeFieldInfoService} from '../dw-resume-field-info-service';
import {DwResumeService} from '../dw-resume-service';

@Component({
  selector: 'app-view-dw-resume',
  templateUrl: './view-dw-resume.component.html',
  styleUrls: ['./view-dw-resume.component.scss'],
})
export class ViewDwResumeComponent extends CommonViewComponent {
  @Input() viewDwResume: any;

  get viewData() {
    return this.viewDwResume;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwResumeService,
    public fieldInfoService: DwResumeFieldInfoService,
  ) {
    super();
  }
}
