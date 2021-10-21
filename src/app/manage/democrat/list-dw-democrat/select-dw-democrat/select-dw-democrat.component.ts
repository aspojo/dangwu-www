import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwDemocratFieldInfoService} from '../dw-democrat-field-info-service';
import {DwDemocratService} from '../dw-democrat-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwDemocrat]',
  templateUrl: './select-dw-democrat.component.html',
  styleUrls: ['./select-dw-democrat.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwDemocratComponent, multi: true}
  ],
})
export class SelectDwDemocratComponent extends CommonSelectOne {
  @Input() selectDwDemocrat; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwDemocratService,
              public fieldInfoService: DwDemocratFieldInfoService,
    ) {
    super();
  }
}
