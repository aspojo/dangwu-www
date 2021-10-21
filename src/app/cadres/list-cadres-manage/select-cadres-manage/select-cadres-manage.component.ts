import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CadresManageFieldInfoService} from '../cadres-manage-field-info-service';
import {CadresManageService} from '../cadres-manage-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectCadresManage]',
  templateUrl: './select-cadres-manage.component.html',
  styleUrls: ['./select-cadres-manage.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectCadresManageComponent, multi: true}
  ],
})
export class SelectCadresManageComponent extends CommonSelectOne {
  @Input() selectCadresManage; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: CadresManageService,
              public fieldInfoService: CadresManageFieldInfoService,
    ) {
    super();
  }
}
