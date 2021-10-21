import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwPhasesFieldInfoService} from '../dw-phases-field-info-service';
import {DwPhasesService} from '../dw-phases-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwPhases]',
  templateUrl: './select-dw-phases.component.html',
  styleUrls: ['./select-dw-phases.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwPhasesComponent, multi: true}
  ],
})
export class SelectDwPhasesComponent extends CommonSelectOne {
  @Input() selectDwPhases; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwPhasesService,
              public fieldInfoService: DwPhasesFieldInfoService,
    ) {
    super();
  }
}
