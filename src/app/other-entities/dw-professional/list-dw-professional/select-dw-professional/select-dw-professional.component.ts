import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwProfessionalFieldInfoService} from '../dw-professional-field-info-service';
import {DwProfessionalService} from '../dw-professional-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwProfessional]',
  templateUrl: './select-dw-professional.component.html',
  styleUrls: ['./select-dw-professional.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwProfessionalComponent, multi: true}
  ],
})
export class SelectDwProfessionalComponent extends CommonSelectOne {
  @Input() selectDwProfessional; // 原始选中值

  @Input() isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwProfessionalService,
              public fieldInfoService: DwProfessionalFieldInfoService,
    ) {
    super();
  }
}
