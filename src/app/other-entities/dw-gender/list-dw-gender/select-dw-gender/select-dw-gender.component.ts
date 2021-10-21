import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwGenderFieldInfoService} from '../dw-gender-field-info-service';
import {DwGenderService} from '../dw-gender-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwGender]',
  templateUrl: './select-dw-gender.component.html',
  styleUrls: ['./select-dw-gender.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwGenderComponent, multi: true}
  ],
})
export class SelectDwGenderComponent extends CommonSelectOne {
  @Input() selectDwGender; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwGenderService,
              public fieldInfoService: DwGenderFieldInfoService,
    ) {
    super();
  }
}
