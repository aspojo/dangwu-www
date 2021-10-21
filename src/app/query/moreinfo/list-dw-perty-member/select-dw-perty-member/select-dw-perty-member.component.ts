import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwPertyMemberFieldInfoService} from '../dw-perty-member-field-info-service';
import {DwPertyMemberService} from '../dw-perty-member-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwPertyMember]',
  templateUrl: './select-dw-perty-member.component.html',
  styleUrls: ['./select-dw-perty-member.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwPertyMemberComponent, multi: true}
  ],
})
export class SelectDwPertyMemberComponent extends CommonSelectOne {
  @Input() selectDwPertyMember; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwPertyMemberService,
              public fieldInfoService: DwPertyMemberFieldInfoService,
    ) {
    super();
  }
}
