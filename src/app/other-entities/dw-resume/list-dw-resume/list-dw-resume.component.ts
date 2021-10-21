import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwResumeFieldInfoService} from './dw-resume-field-info-service';
import {DwResumeService} from './dw-resume-service';

@Component({
  selector: 'app-list-dw-resume',
  templateUrl: './list-dw-resume.component.html',
  styleUrls: ['./list-dw-resume.component.scss'],
  animations: [routerTransition()]
})
export class ListDwResumeComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwResumeService,
    public fieldInfoService: DwResumeFieldInfoService,
  ) {
    super();
  }

}
