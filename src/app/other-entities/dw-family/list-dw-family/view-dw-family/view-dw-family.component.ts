import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwFamilyFieldInfoService} from '../dw-family-field-info-service';
import {DwFamilyService} from '../dw-family-service';

@Component({
  selector: 'app-view-dw-family',
  templateUrl: './view-dw-family.component.html',
  styleUrls: ['./view-dw-family.component.scss'],
})
export class ViewDwFamilyComponent extends CommonViewComponent {
  @Input() viewDwFamily: any;

  get viewData() {
    return this.viewDwFamily;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwFamilyService,
    public fieldInfoService: DwFamilyFieldInfoService,
  ) {
    super();
  }
}
