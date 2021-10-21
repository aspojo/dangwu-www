import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwPertyMemberManageFieldInfoService} from '../../dw-perty-member-manage-field-info-service';
import {DwPertyMemberManageService} from '../../dw-perty-member-manage-service';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-view-dw-perty-member-manage-base-info',
  templateUrl: './view-dw-perty-member-manage-base-info.component.html',
})
export class ViewDwPertyMemberManageBaseInfoComponent extends CommonViewBaseInfo {
  age: number;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwPertyMemberManageService,
              public fieldInfoService: DwPertyMemberManageFieldInfoService,
  ) {
    super();
  }

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
