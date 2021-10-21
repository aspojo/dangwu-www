import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {ActDemoLeaveFieldInfoService} from '../../act-demo-leave-field-info-service';
import {ActDemoLeaveService} from '../../act-demo-leave-service';


@Component({
  selector: 'app-view-act-demo-leave-base-info',
  templateUrl: './view-act-demo-leave-base-info.component.html',
})
export class ViewActDemoLeaveBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: ActDemoLeaveService,
              public fieldInfoService: ActDemoLeaveFieldInfoService,
  ) {
    super();
  }
}
