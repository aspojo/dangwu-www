import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DataSourceFieldInfoService} from '../data-source-field-info-service';
import {DataSourceService} from '../data-source-service';

@Component({
  selector: '[selectDataSource]',
  templateUrl: './select-data-source.component.html',
  styleUrls: ['./select-data-source.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDataSourceComponent, multi: true}
  ],
})
export class SelectDataSourceComponent extends CommonSelectOne {
  @Input() selectDataSource; // 原始选中值
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DataSourceService,
              public fieldInfoService: DataSourceFieldInfoService,
    ) {
    super();
  }
}
