import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwRelationshipFieldInfoService} from '../dw-relationship-field-info-service';
import {DwRelationshipService} from '../dw-relationship-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwRelationship]',
  templateUrl: './select-dw-relationship.component.html',
  styleUrls: ['./select-dw-relationship.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwRelationshipComponent, multi: true}
  ],
})
export class SelectDwRelationshipComponent extends CommonSelectOne {
  @Input() selectDwRelationship; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwRelationshipService,
              public fieldInfoService: DwRelationshipFieldInfoService,
    ) {
    super();
  }
}
