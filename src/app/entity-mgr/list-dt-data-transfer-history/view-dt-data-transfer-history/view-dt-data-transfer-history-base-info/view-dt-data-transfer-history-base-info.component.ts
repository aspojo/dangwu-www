import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DtDataTransferHistoryFieldInfoService} from '../../dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from '../../dt-data-transfer-history-service';


@Component({
  selector: 'app-view-dt-data-transfer-history-base-info',
  templateUrl: './view-dt-data-transfer-history-base-info.component.html',
})
export class ViewDtDataTransferHistoryBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DtDataTransferHistoryService,
              public fieldInfoService: DtDataTransferHistoryFieldInfoService,
  ) {
    super();
  }
}
