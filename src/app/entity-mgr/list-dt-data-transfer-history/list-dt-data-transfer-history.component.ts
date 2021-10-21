import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DtDataTransferHistoryFieldInfoService} from './dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from './dt-data-transfer-history-service';

@Component({
  selector: 'app-list-dt-data-transfer-history',
  templateUrl: './list-dt-data-transfer-history.component.html',
  styleUrls: ['./list-dt-data-transfer-history.component.scss'],
  animations: [routerTransition()]
})
export class ListDtDataTransferHistoryComponent extends CommonDataTable {
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DtDataTransferHistoryService,
    public fieldInfoService: DtDataTransferHistoryFieldInfoService,
  ) {
    super();
  }

  afterDataDeleted() {
    const filePathList = this.selectedList.map(value => value.filePath);
    this.http.post('removeFileList', {filePathList: filePathList}).subscribe((data) => {});
  }

}
