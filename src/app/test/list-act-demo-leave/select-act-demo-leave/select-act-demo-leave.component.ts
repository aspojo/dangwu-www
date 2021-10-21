import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActDemoLeaveFieldInfoService} from '../act-demo-leave-field-info-service';
import {ActDemoLeaveService} from '../act-demo-leave-service';

@Component({
  selector: '[selectActDemoLeave]',
  templateUrl: './select-act-demo-leave.component.html',
  styleUrls: ['./select-act-demo-leave.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectActDemoLeaveComponent, multi: true}
  ],
})
export class SelectActDemoLeaveComponent extends CommonSelectOne {
  @Input() selectActDemoLeave; // 原始选中值
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: ActDemoLeaveService,
              public fieldInfoService: ActDemoLeaveFieldInfoService,
    ) {
    super();
  }
}
