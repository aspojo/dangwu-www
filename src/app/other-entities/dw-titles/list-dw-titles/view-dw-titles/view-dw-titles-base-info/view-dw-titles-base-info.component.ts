import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwTitlesFieldInfoService} from '../../dw-titles-field-info-service';
import {DwTitlesService} from '../../dw-titles-service';



@Component({
  selector: 'app-view-dw-titles-base-info',
  templateUrl: './view-dw-titles-base-info.component.html',
})
export class ViewDwTitlesBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwTitlesService,
              public fieldInfoService: DwTitlesFieldInfoService,
  ) {
    super();
  }
}
