import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwEthnicFieldInfoService} from './dw-ethnic-field-info-service';
import {DwEthnicService} from './dw-ethnic-service';

@Component({
  selector: 'app-list-dw-ethnic',
  templateUrl: './list-dw-ethnic.component.html',
  styleUrls: ['./list-dw-ethnic.component.scss'],
  animations: [routerTransition()]
})
export class ListDwEthnicComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwEthnicService,
    public fieldInfoService: DwEthnicFieldInfoService,
  ) {
    super();
  }

}
