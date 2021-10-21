import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwPhasesFieldInfoService} from './dw-phases-field-info-service';
import {DwPhasesService} from './dw-phases-service';

@Component({
  selector: 'app-list-dw-phases',
  templateUrl: './list-dw-phases.component.html',
  styleUrls: ['./list-dw-phases.component.scss'],
  animations: [routerTransition()]
})
export class ListDwPhasesComponent extends CommonDataTable {

  isQueryCollapsed = true;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwPhasesService,
    public fieldInfoService: DwPhasesFieldInfoService,
  ) {
    super();
  }
}
