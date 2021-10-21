import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwPertyMemberFieldInfoService} from '../../dw-perty-member-field-info-service';
import {DwPertyMemberService} from '../../dw-perty-member-service';



@Component({
  selector: 'app-view-dw-perty-member-base-info',
  templateUrl: './view-dw-perty-member-base-info.component.html',
})
export class ViewDwPertyMemberBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwPertyMemberService,
              public fieldInfoService: DwPertyMemberFieldInfoService,
  ) {
    super();
  }

  age: number;
  afterGetOne() {
    if (this.viewDataTemp.birthday) {
      const birthday = new Date(this.viewDataTemp.birthday);
      const now = new Date();
      this.age = now.getFullYear() - birthday.getFullYear() - ((now.getMonth() < birthday.getMonth() || (now.getMonth() == birthday.getMonth() && now.getDate() < birthday.getDate())) ? 1 : 0);
      this.viewDataTemp.birthday = this.viewDataTemp.birthday.substring(0, 7).replace('-', '.');
      switch (this.viewDataTemp.pingyi) {
        case '0':
          this.viewDataTemp.pingyi = '否';
          break;
        case '1':
          this.viewDataTemp.pingyi = '是';
          break;
      }
    }
  }
}
