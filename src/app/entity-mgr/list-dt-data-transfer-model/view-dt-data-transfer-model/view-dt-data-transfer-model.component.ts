import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DtDataTransferModelFieldInfoService} from '../dt-data-transfer-model-field-info-service';
import {DtDataTransferModelService} from '../dt-data-transfer-model-service';

@Component({
  selector: 'app-view-dt-data-transfer-model',
  templateUrl: './view-dt-data-transfer-model.component.html',
  styleUrls: ['./view-dt-data-transfer-model.component.scss'],
})
export class ViewDtDataTransferModelComponent extends CommonViewComponent {
  @Input() viewDtDataTransferModel: any;

  get viewData() {
    return this.viewDtDataTransferModel;
  }

  fieldList: any;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: DtDataTransferModelService,
    public fieldInfoService: DtDataTransferModelFieldInfoService,
  ) {
    super();
  }

  listenDataLoad(value: any) {
    this.fieldList = Object.values(value.fieldMapping);
  }
}
