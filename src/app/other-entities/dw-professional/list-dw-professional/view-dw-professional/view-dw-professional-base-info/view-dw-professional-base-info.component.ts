import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwProfessionalFieldInfoService} from '../../dw-professional-field-info-service';
import {DwProfessionalService} from '../../dw-professional-service';



@Component({
  selector: 'app-view-dw-professional-base-info',
  templateUrl: './view-dw-professional-base-info.component.html',
})
export class ViewDwProfessionalBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwProfessionalService,
              public fieldInfoService: DwProfessionalFieldInfoService,
  ) {
    super();
  }
}
