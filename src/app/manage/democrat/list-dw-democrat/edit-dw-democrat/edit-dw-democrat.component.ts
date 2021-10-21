import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwDemocratFieldInfoService} from '../dw-democrat-field-info-service';
import {DwDemocratService} from '../dw-democrat-service';


@Component({
  selector: 'app-edit-dw-democrat',
  templateUrl: './edit-dw-democrat.component.html',
  styleUrls: ['./edit-dw-democrat.component.scss'],
})
export class EditDwDemocratComponent extends CommonEditComponent {

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
