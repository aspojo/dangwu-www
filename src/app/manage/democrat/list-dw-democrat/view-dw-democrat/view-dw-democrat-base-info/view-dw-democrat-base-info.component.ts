import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwDemocratFieldInfoService} from '../../dw-democrat-field-info-service';
import {DwDemocratService} from '../../dw-democrat-service';



@Component({
  selector: 'app-view-dw-democrat-base-info',
  templateUrl: './view-dw-democrat-base-info.component.html',
})
export class ViewDwDemocratBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwDemocratService,
              public fieldInfoService: DwDemocratFieldInfoService,
  ) {
    super();
  }
}
