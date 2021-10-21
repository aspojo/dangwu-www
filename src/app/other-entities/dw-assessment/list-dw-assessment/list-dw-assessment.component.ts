import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwAssessmentFieldInfoService} from './dw-assessment-field-info-service';
import {DwAssessmentService} from './dw-assessment-service';

@Component({
  selector: 'app-list-dw-assessment',
  templateUrl: './list-dw-assessment.component.html',
  styleUrls: ['./list-dw-assessment.component.scss'],
  animations: [routerTransition()]
})
export class ListDwAssessmentComponent extends CommonDataTable {

  isQueryCollapsed = false;
  isOpratorCollapsed = false;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwAssessmentService,
    public fieldInfoService: DwAssessmentFieldInfoService,
  ) {
    super();
  }

}
