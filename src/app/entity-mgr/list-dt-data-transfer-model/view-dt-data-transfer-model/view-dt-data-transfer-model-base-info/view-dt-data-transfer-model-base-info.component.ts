import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DtDataTransferModelFieldInfoService} from '../../dt-data-transfer-model-field-info-service';
import {DtDataTransferModelService} from '../../dt-data-transfer-model-service';


@Component({
  selector: 'app-view-dt-data-transfer-model-base-info',
  templateUrl: './view-dt-data-transfer-model-base-info.component.html',
})
export class ViewDtDataTransferModelBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DtDataTransferModelService,
              public fieldInfoService: DtDataTransferModelFieldInfoService,
  ) {
    super();
  }
}
