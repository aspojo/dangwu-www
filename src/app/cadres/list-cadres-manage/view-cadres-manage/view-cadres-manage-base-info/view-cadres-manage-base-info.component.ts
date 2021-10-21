import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {CadresManageFieldInfoService} from '../../cadres-manage-field-info-service';
import {CadresManageService} from '../../cadres-manage-service';


@Component({
  selector: 'app-view-cadres-manage-base-info',
  templateUrl: './view-cadres-manage-base-info.component.html',
})
export class ViewCadresManageBaseInfoComponent extends CommonViewBaseInfo {
  joinOrgTime: any;
  age: any;
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: CadresManageService,
              public fieldInfoService: CadresManageFieldInfoService,
  ) {
    super();
  }

  afterGetOne() {
    if (this.viewDataTemp.probationarydate) {
      let str = this.viewDataTemp.probationarydate;
      str = str.substring(0, 7).replace('-', '.');
      this.viewDataTemp.jointime = str;
    }
    if (this.viewDataTemp.birthday) {
      let str = this.viewDataTemp.birthday;
      str = str.substring(0, 7).replace('-', '.');
      this.viewDataTemp.birthday = str;
    }
    if (this.viewDataTemp.probationarydate) {
      this.joinOrgTime = this.viewDataTemp.probationarydate.substring(0, 7).replace('-', '.');
    }
    this.getAge();
  }
  getAge() {
    const birDate = new Date(this.viewDataTemp.birthday);
    const now = new Date();
    this.age = now.getFullYear() - birDate.getFullYear() - ((now.getMonth() < birDate.getMonth() || (now.getMonth() == birDate.getMonth() && now.getDate() < birDate.getDate())) ? 1 : 0);
  }
}
