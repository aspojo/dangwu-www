import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DtExcelTemplateFileFieldInfoService} from './dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from './dt-excel-template-file-service';

@Component({
  selector: 'app-list-dt-excel-template-file',
  templateUrl: './list-dt-excel-template-file.component.html',
  styleUrls: ['./list-dt-excel-template-file.component.scss'],
  animations: [routerTransition()]
})
export class ListDtExcelTemplateFileComponent extends CommonDataTable {
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DtExcelTemplateFileService,
    public fieldInfoService: DtExcelTemplateFileFieldInfoService,
  ) {
    super();
  }

}
