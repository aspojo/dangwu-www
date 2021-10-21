import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwRelationshipFieldInfoService} from './dw-relationship-field-info-service';
import {DwRelationshipService} from './dw-relationship-service';

@Component({
  selector: 'app-list-dw-relationship',
  templateUrl: './list-dw-relationship.component.html',
  styleUrls: ['./list-dw-relationship.component.scss'],
  animations: [routerTransition()]
})
export class ListDwRelationshipComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwRelationshipService,
    public fieldInfoService: DwRelationshipFieldInfoService,
  ) {
    super();
  }

}
