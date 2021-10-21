import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwGenderFieldInfoService} from '../../dw-gender-field-info-service';
import {DwGenderService} from '../../dw-gender-service';



@Component({
  selector: 'app-view-dw-gender-base-info',
  templateUrl: './view-dw-gender-base-info.component.html',
})
export class ViewDwGenderBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwGenderService,
              public fieldInfoService: DwGenderFieldInfoService,
  ) {
    super();
  }
}
