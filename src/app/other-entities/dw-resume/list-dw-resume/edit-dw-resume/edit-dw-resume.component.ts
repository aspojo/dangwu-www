import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwResumeFieldInfoService} from '../dw-resume-field-info-service';
import {DwResumeService} from '../dw-resume-service';


@Component({
  selector: 'app-edit-dw-resume',
  templateUrl: './edit-dw-resume.component.html',
  styleUrls: ['./edit-dw-resume.component.scss'],
})
export class EditDwResumeComponent extends CommonEditComponent {

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
