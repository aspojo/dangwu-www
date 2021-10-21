import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwRapFieldInfoService} from '../dw-rap-field-info-service';
import {DwRapService} from '../dw-rap-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwRap]',
  templateUrl: './select-dw-rap.component.html',
  styleUrls: ['./select-dw-rap.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwRapComponent, multi: true}
  ],
})
export class SelectDwRapComponent extends CommonSelectOne {
  @Input() selectDwRap; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwRapService,
              public fieldInfoService: DwRapFieldInfoService,
    ) {
    super();
  }
}
