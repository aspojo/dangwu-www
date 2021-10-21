import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwTrainFieldInfoService} from '../dw-train-field-info-service';
import {DwTrainService} from '../dw-train-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwTrain]',
  templateUrl: './select-dw-train.component.html',
  styleUrls: ['./select-dw-train.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwTrainComponent, multi: true}
  ],
})
export class SelectDwTrainComponent extends CommonSelectOne {
  @Input() selectDwTrain; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwTrainService,
              public fieldInfoService: DwTrainFieldInfoService,
    ) {
    super();
  }
}
