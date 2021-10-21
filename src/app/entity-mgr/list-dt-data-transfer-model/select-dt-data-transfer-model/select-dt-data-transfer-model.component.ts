import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DtDataTransferModelFieldInfoService} from '../dt-data-transfer-model-field-info-service';
import {DtDataTransferModelService} from '../dt-data-transfer-model-service';

@Component({
  selector: '[selectDtDataTransferModel]',
  templateUrl: './select-dt-data-transfer-model.component.html',
  styleUrls: ['./select-dt-data-transfer-model.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDtDataTransferModelComponent, multi: true}
  ],
})
export class SelectDtDataTransferModelComponent extends CommonSelectOne {
  @Input() selectDtDataTransferModel; // 原始选中值
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DtDataTransferModelService,
              public fieldInfoService: DtDataTransferModelFieldInfoService,
    ) {
    super();
  }
}
