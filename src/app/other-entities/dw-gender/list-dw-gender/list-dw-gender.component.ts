import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwGenderFieldInfoService} from './dw-gender-field-info-service';
import {DwGenderService} from './dw-gender-service';

@Component({
  selector: 'app-list-dw-gender',
  templateUrl: './list-dw-gender.component.html',
  styleUrls: ['./list-dw-gender.component.scss'],
  animations: [routerTransition()]
})
export class ListDwGenderComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwGenderService,
    public fieldInfoService: DwGenderFieldInfoService,
  ) {
    super();
  }

}
