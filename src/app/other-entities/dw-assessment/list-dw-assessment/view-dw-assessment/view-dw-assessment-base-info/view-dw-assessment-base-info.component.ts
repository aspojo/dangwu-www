import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwAssessmentFieldInfoService} from '../../dw-assessment-field-info-service';
import {DwAssessmentService} from '../../dw-assessment-service';



@Component({
  selector: 'app-view-dw-assessment-base-info',
  templateUrl: './view-dw-assessment-base-info.component.html',
})
export class ViewDwAssessmentBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwAssessmentService,
              public fieldInfoService: DwAssessmentFieldInfoService,
  ) {
    super();
  }
}
