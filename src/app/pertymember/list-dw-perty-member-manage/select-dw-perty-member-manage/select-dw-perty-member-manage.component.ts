import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwPertyMemberManageFieldInfoService} from '../dw-perty-member-manage-field-info-service';
import {DwPertyMemberManageService} from '../dw-perty-member-manage-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwPertyMemberManage]',
  templateUrl: './select-dw-perty-member-manage.component.html',
  styleUrls: ['./select-dw-perty-member-manage.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwPertyMemberManageComponent, multi: true}
  ],
})
export class SelectDwPertyMemberManageComponent extends CommonSelectOne {
  @Input() selectDwPertyMemberManage; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwPertyMemberManageService,
              public fieldInfoService: DwPertyMemberManageFieldInfoService,
    ) {
    super();
  }
}
