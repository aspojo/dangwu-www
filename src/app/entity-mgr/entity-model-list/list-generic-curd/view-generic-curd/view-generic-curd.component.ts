import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {GenericCurdFieldInfoService} from '../generic-curd-field-info-service';
import {GenericCurdService} from '../generic-curd-service';

@Component({
  selector: 'app-view-generic-curd',
  templateUrl: './view-generic-curd.component.html',
  styleUrls: ['./view-generic-curd.component.scss'],
})
export class ViewGenericCurdComponent extends CommonViewComponent {
  @Input() viewGenericCurd: any;

  get viewData() {
    return this.viewGenericCurd;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: GenericCurdService,
    public fieldInfoService: GenericCurdFieldInfoService,
  ) {
    super();
  }
}
