import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwFamilyFieldInfoService} from '../dw-family-field-info-service';
import {DwFamilyService} from '../dw-family-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwFamily]',
  templateUrl: './select-dw-family.component.html',
  styleUrls: ['./select-dw-family.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwFamilyComponent, multi: true}
  ],
})
export class SelectDwFamilyComponent extends CommonSelectOne {
  @Input() selectDwFamily; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwFamilyService,
              public fieldInfoService: DwFamilyFieldInfoService,
    ) {
    super();
  }
}
