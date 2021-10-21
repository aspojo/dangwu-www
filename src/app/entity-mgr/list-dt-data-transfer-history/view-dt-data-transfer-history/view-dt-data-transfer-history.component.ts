import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DtDataTransferHistoryFieldInfoService} from '../dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from '../dt-data-transfer-history-service';

@Component({
  selector: 'app-view-dt-data-transfer-history',
  templateUrl: './view-dt-data-transfer-history.component.html',
  styleUrls: ['./view-dt-data-transfer-history.component.scss'],
})
export class ViewDtDataTransferHistoryComponent extends CommonViewComponent {
  @Input() viewDtDataTransferHistory: any;

  get viewData() {
    return this.viewDtDataTransferHistory;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: DtDataTransferHistoryService,
    public fieldInfoService: DtDataTransferHistoryFieldInfoService,
  ) {
    super();
  }
}
