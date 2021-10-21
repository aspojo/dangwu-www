import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DtDataTransferHistoryFieldInfoService} from '../dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from '../dt-data-transfer-history-service';

@Component({
  selector: '[selectDtDataTransferHistory]',
  templateUrl: './select-dt-data-transfer-history.component.html',
  styleUrls: ['./select-dt-data-transfer-history.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDtDataTransferHistoryComponent, multi: true}
  ],
})
export class SelectDtDataTransferHistoryComponent extends CommonSelectOne {
  @Input() selectDtDataTransferHistory; // 原始选中值
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DtDataTransferHistoryService,
              public fieldInfoService: DtDataTransferHistoryFieldInfoService,
    ) {
    super();
  }
}
