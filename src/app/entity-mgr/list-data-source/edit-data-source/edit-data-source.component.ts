import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {MessageService} from '@shared-services/message';
import {UtilHttp} from '@shared-utils/http';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {DataSourceFieldInfoService} from '../data-source-field-info-service';
import {DataSourceService} from '../data-source-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-data-source',
  templateUrl: './edit-data-source.component.html',
  styleUrls: ['./edit-data-source.component.scss'],
})
export class EditDataSourceComponent extends CommonEditComponent {

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


  testingDataSource() {
    this.http.post('testingDataSource', this.editDataTemp).subscribe((data) => {
      if (UtilHttp.hasError(data)) {
        MessageService.showGlobalMessage('success', '连接成功');
      }
    });
  }

  commitToServer(): Observable<Object> {
    return new Observable(subscriber => {
      this.http.post('saveDataSource', this.editDataTemp).subscribe(value => {
        subscriber.next(value);
      });
    });
  }
}
