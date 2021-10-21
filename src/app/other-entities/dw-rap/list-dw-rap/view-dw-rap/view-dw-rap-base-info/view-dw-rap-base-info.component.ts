import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwRapFieldInfoService} from '../../dw-rap-field-info-service';
import {DwRapService} from '../../dw-rap-service';



@Component({
  selector: 'app-view-dw-rap-base-info',
  templateUrl: './view-dw-rap-base-info.component.html',
})
export class ViewDwRapBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwRapService,
              public fieldInfoService: DwRapFieldInfoService,
  ) {
    super();
  }
}
