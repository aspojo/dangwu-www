import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwAssessmentFieldInfoService} from '../dw-assessment-field-info-service';
import {DwAssessmentService} from '../dw-assessment-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwAssessment]',
  templateUrl: './select-dw-assessment.component.html',
  styleUrls: ['./select-dw-assessment.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwAssessmentComponent, multi: true}
  ],
})
export class SelectDwAssessmentComponent extends CommonSelectOne {
  @Input() selectDwAssessment; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwAssessmentService,
              public fieldInfoService: DwAssessmentFieldInfoService,
    ) {
    super();
  }
}
