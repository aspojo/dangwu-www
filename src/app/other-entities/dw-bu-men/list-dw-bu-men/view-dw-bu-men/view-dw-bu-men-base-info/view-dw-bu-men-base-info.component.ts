import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwBuMenFieldInfoService} from '../../dw-bu-men-field-info-service';
import {DwBuMenService} from '../../dw-bu-men-service';



@Component({
  selector: 'app-view-dw-bu-men-base-info',
  templateUrl: './view-dw-bu-men-base-info.component.html',
})
export class ViewDwBuMenBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwBuMenService,
              public fieldInfoService: DwBuMenFieldInfoService,
  ) {
    super();
  }
}
