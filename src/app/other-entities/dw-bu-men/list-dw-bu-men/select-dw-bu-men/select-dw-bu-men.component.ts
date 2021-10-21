import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwBuMenFieldInfoService} from '../dw-bu-men-field-info-service';
import {DwBuMenService} from '../dw-bu-men-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwBuMen]',
  templateUrl: './select-dw-bu-men.component.html',
  styleUrls: ['./select-dw-bu-men.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwBuMenComponent, multi: true}
  ],
})
export class SelectDwBuMenComponent extends CommonSelectOne {
  @Input() selectDwBuMen; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwBuMenService,
              public fieldInfoService: DwBuMenFieldInfoService,
    ) {
    super();
  }
}
