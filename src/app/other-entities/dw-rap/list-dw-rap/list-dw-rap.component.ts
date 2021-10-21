import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwRapFieldInfoService} from './dw-rap-field-info-service';
import {DwRapService} from './dw-rap-service';

@Component({
  selector: 'app-list-dw-rap',
  templateUrl: './list-dw-rap.component.html',
  styleUrls: ['./list-dw-rap.component.scss'],
  animations: [routerTransition()]
})
export class ListDwRapComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwRapService,
    public fieldInfoService: DwRapFieldInfoService,
  ) {
    super();
  }

}
