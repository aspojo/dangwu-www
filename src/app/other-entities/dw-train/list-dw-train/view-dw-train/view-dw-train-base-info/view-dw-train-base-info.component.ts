import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwTrainFieldInfoService} from '../../dw-train-field-info-service';
import {DwTrainService} from '../../dw-train-service';



@Component({
  selector: 'app-view-dw-train-base-info',
  templateUrl: './view-dw-train-base-info.component.html',
})
export class ViewDwTrainBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwTrainService,
              public fieldInfoService: DwTrainFieldInfoService,
  ) {
    super();
  }
}
