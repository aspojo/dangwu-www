import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {GenericCurdFieldInfoService} from '../../generic-curd-field-info-service';
import {GenericCurdService} from '../../generic-curd-service';


@Component({
  selector: 'app-view-generic-curd-base-info',
  templateUrl: './view-generic-curd-base-info.component.html',
})
export class ViewGenericCurdBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: GenericCurdService,
              public fieldInfoService: GenericCurdFieldInfoService,
  ) {
    super();
  }
}
