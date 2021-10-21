import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {MessageService} from '@shared-services/message';
import {UtilHttp} from '@shared-utils/http';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DataSourceFieldInfoService} from './data-source-field-info-service';
import {DataSourceService} from './data-source-service';

@Component({
  selector: 'app-list-data-source',
  templateUrl: './list-data-source.component.html',
  styleUrls: ['./list-data-source.component.scss'],
  animations: [routerTransition()]
})
export class ListDataSourceComponent extends CommonDataTable {
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DataSourceService,
    public fieldInfoService: DataSourceFieldInfoService,
  ) {
    super();
  }

  // 刷新实体定义
  reInitDelegator(dataSourceName: any) {
    this.http.post('reInitDelegator', {dataSourceName: dataSourceName}).subscribe((data) => {
      if (UtilHttp.notHasError(data)) {
        MessageService.showGlobalMessage('success', '刷新成功');
      }
    });
  }
}
