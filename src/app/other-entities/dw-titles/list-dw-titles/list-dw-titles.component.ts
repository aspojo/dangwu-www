import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwTitlesFieldInfoService} from './dw-titles-field-info-service';
import {DwTitlesService} from './dw-titles-service';

@Component({
  selector: 'app-list-dw-titles',
  templateUrl: './list-dw-titles.component.html',
  styleUrls: ['./list-dw-titles.component.scss'],
  animations: [routerTransition()]
})
export class ListDwTitlesComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwTitlesService,
    public fieldInfoService: DwTitlesFieldInfoService,
  ) {
    super();
  }

}
