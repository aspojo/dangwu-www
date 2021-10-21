import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DtExcelDataExtractModelFieldInfoService} from './dt-excel-data-extract-model-field-info-service';
import {DtExcelDataExtractModelService} from './dt-excel-data-extract-model-service';

@Component({
  selector: 'app-list-dt-excel-data-extract-model',
  templateUrl: './list-dt-excel-data-extract-model.component.html',
  styleUrls: ['./list-dt-excel-data-extract-model.component.scss'],
  animations: [routerTransition()]
})
export class ListDtExcelDataExtractModelComponent extends CommonDataTable {
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DtExcelDataExtractModelService,
    public fieldInfoService: DtExcelDataExtractModelFieldInfoService,
  ) {
    super();
  }

}
