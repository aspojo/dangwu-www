import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwBuMenFieldInfoService} from './dw-bu-men-field-info-service';
import {DwBuMenService} from './dw-bu-men-service';

@Component({
  selector: 'app-list-dw-bu-men',
  templateUrl: './list-dw-bu-men.component.html',
  styleUrls: ['./list-dw-bu-men.component.scss'],
  animations: [routerTransition()]
})
export class ListDwBuMenComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwBuMenService,
    public fieldInfoService: DwBuMenFieldInfoService,
  ) {
    super();
  }

}
