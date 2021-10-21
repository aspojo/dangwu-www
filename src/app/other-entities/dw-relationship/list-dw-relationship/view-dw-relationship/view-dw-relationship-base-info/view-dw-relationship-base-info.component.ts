import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DwRelationshipFieldInfoService} from '../../dw-relationship-field-info-service';
import {DwRelationshipService} from '../../dw-relationship-service';



@Component({
  selector: 'app-view-dw-relationship-base-info',
  templateUrl: './view-dw-relationship-base-info.component.html',
})
export class ViewDwRelationshipBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DwRelationshipService,
              public fieldInfoService: DwRelationshipFieldInfoService,
  ) {
    super();
  }
}
