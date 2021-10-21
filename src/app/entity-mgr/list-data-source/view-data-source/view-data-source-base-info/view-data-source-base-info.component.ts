import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DataSourceFieldInfoService} from '../../data-source-field-info-service';
import {DataSourceService} from '../../data-source-service';


@Component({
  selector: 'app-view-data-source-base-info',
  templateUrl: './view-data-source-base-info.component.html',
})
export class ViewDataSourceBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DataSourceService,
              public fieldInfoService: DataSourceFieldInfoService,
  ) {
    super();
  }
}
