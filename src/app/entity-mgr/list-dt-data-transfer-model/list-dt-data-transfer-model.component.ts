import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DtDataTransferModelFieldInfoService} from './dt-data-transfer-model-field-info-service';
import {DtDataTransferModelService} from './dt-data-transfer-model-service';

@Component({
  selector: 'app-list-dt-data-transfer-model',
  templateUrl: './list-dt-data-transfer-model.component.html',
  styleUrls: ['./list-dt-data-transfer-model.component.scss'],
  animations: [routerTransition()]
})
export class ListDtDataTransferModelComponent extends CommonDataTable {
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DtDataTransferModelService,
    public fieldInfoService: DtDataTransferModelFieldInfoService,
  ) {
    super();
  }

}
