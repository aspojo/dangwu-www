import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwEthnicFieldInfoService} from '../dw-ethnic-field-info-service';
import {DwEthnicService} from '../dw-ethnic-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwEthnic]',
  templateUrl: './select-dw-ethnic.component.html',
  styleUrls: ['./select-dw-ethnic.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwEthnicComponent, multi: true}
  ],
})
export class SelectDwEthnicComponent extends CommonSelectOne {
  @Input() selectDwEthnic; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwEthnicService,
              public fieldInfoService: DwEthnicFieldInfoService,
    ) {
    super();
  }
}
