import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwResumeFieldInfoService} from '../../dw-resume-field-info-service';
import {DwResumeService} from '../../dw-resume-service';



@Component({
  selector: 'app-view-dw-resume-base-info',
  templateUrl: './view-dw-resume-base-info.component.html',
})
export class ViewDwResumeBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwResumeService,
              public fieldInfoService: DwResumeFieldInfoService,
  ) {
    super();
  }
}
