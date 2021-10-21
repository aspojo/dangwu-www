import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwFamilyFieldInfoService} from '../../dw-family-field-info-service';
import {DwFamilyService} from '../../dw-family-service';



@Component({
  selector: 'app-view-dw-family-base-info',
  templateUrl: './view-dw-family-base-info.component.html',
})
export class ViewDwFamilyBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwFamilyService,
              public fieldInfoService: DwFamilyFieldInfoService,
  ) {
    super();
  }
}
