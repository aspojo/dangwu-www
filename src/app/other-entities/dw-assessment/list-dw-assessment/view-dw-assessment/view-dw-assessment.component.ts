import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwAssessmentFieldInfoService} from '../dw-assessment-field-info-service';
import {DwAssessmentService} from '../dw-assessment-service';

@Component({
  selector: 'app-view-dw-assessment',
  templateUrl: './view-dw-assessment.component.html',
  styleUrls: ['./view-dw-assessment.component.scss'],
})
export class ViewDwAssessmentComponent extends CommonViewComponent {
  @Input() viewDwAssessment: any;

  get viewData() {
    return this.viewDwAssessment;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwAssessmentService,
    public fieldInfoService: DwAssessmentFieldInfoService,
  ) {
    super();
  }
}
