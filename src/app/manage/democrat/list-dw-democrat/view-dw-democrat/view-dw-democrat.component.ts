import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwDemocratFieldInfoService} from '../dw-democrat-field-info-service';
import {DwDemocratService} from '../dw-democrat-service';

@Component({
  selector: 'app-view-dw-democrat',
  templateUrl: './view-dw-democrat.component.html',
  styleUrls: ['./view-dw-democrat.component.scss'],
})
export class ViewDwDemocratComponent extends CommonViewComponent {
  @Input() viewDwDemocrat: any;

  get viewData() {
    return this.viewDwDemocrat;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwDemocratService,
    public fieldInfoService: DwDemocratFieldInfoService,
  ) {
    super();
  }
}
