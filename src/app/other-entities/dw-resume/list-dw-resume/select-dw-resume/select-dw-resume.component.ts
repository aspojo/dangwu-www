import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwResumeFieldInfoService} from '../dw-resume-field-info-service';
import {DwResumeService} from '../dw-resume-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwResume]',
  templateUrl: './select-dw-resume.component.html',
  styleUrls: ['./select-dw-resume.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwResumeComponent, multi: true}
  ],
})
export class SelectDwResumeComponent extends CommonSelectOne {
  @Input() selectDwResume; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwResumeService,
              public fieldInfoService: DwResumeFieldInfoService,
    ) {
    super();
  }
}
