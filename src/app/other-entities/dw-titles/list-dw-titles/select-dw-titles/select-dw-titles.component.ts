import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwTitlesFieldInfoService} from '../dw-titles-field-info-service';
import {DwTitlesService} from '../dw-titles-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwTitles]',
  templateUrl: './select-dw-titles.component.html',
  styleUrls: ['./select-dw-titles.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwTitlesComponent, multi: true}
  ],
})
export class SelectDwTitlesComponent extends CommonSelectOne {
  @Input() selectDwTitles; // 原始选中值

  isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwTitlesService,
              public fieldInfoService: DwTitlesFieldInfoService,
    ) {
    super();
  }
}
