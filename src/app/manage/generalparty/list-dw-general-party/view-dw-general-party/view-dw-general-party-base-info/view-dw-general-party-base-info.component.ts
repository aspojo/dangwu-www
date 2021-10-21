import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwGeneralPartyFieldInfoService} from '../../dw-general-party-field-info-service';
import {DwGeneralPartyService} from '../../dw-general-party-service';



@Component({
  selector: 'app-view-dw-general-party-base-info',
  templateUrl: './view-dw-general-party-base-info.component.html',
})
export class ViewDwGeneralPartyBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwGeneralPartyService,
              public fieldInfoService: DwGeneralPartyFieldInfoService,
  ) {
    super();
  }
}
