import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwPhasesFieldInfoService} from '../../dw-phases-field-info-service';
import {DwPhasesService} from '../../dw-phases-service';



@Component({
  selector: 'app-view-dw-phases-base-info',
  templateUrl: './view-dw-phases-base-info.component.html',
})
export class ViewDwPhasesBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwPhasesService,
              public fieldInfoService: DwPhasesFieldInfoService,
  ) {
    super();
  }
}
