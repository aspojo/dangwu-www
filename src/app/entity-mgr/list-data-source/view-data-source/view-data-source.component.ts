import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DataSourceFieldInfoService} from '../data-source-field-info-service';
import {DataSourceService} from '../data-source-service';

@Component({
  selector: 'app-view-data-source',
  templateUrl: './view-data-source.component.html',
  styleUrls: ['./view-data-source.component.scss'],
})
export class ViewDataSourceComponent extends CommonViewComponent {
  @Input() viewDataSource: any;

  get viewData() {
    return this.viewDataSource;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: DataSourceService,
    public fieldInfoService: DataSourceFieldInfoService,
  ) {
    super();
  }
}
