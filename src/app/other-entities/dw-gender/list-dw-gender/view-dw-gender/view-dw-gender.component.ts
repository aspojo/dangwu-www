import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwGenderFieldInfoService} from '../dw-gender-field-info-service';
import {DwGenderService} from '../dw-gender-service';

@Component({
  selector: 'app-view-dw-gender',
  templateUrl: './view-dw-gender.component.html',
  styleUrls: ['./view-dw-gender.component.scss'],
})
export class ViewDwGenderComponent extends CommonViewComponent {
  @Input() viewDwGender: any;

  get viewData() {
    return this.viewDwGender;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwGenderService,
    public fieldInfoService: DwGenderFieldInfoService,
  ) {
    super();
  }
}
