import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DemocratManageFieldInfoService} from '../../democrat-manage-field-info-service';
import {DemocratManageService} from '../../democrat-manage-service';


@Component({
  selector: 'app-view-democrat-manage-base-info',
  templateUrl: './view-democrat-manage-base-info.component.html',
})
export class ViewDemocratManageBaseInfoComponent extends CommonViewBaseInfo {
  age: any;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DemocratManageService,
              public fieldInfoService: DemocratManageFieldInfoService,
  ) {
    super();
  }
  afterGetOne() {
    if (this.viewDataTemp.birthday) {
      let str = this.viewDataTemp.birthday;
      str = str.substring(0, 7).replace('-', '.');
      this.viewDataTemp.birthday = str;
    }
    this.getAge();
  }

  getAge() {
    const birDate = new Date(this.viewDataTemp.birthday);
    const now = new Date();
    this.age = now.getFullYear() - birDate.getFullYear() - ((now.getMonth() < birDate.getMonth() || (now.getMonth() == birDate.getMonth() && now.getDate() < birDate.getDate())) ? 1 : 0);
  }
}
