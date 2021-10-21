import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwGenderFieldInfoService} from '../dw-gender-field-info-service';
import {DwGenderService} from '../dw-gender-service';


@Component({
  selector: 'app-edit-dw-gender',
  templateUrl: './edit-dw-gender.component.html',
  styleUrls: ['./edit-dw-gender.component.scss'],
})
export class EditDwGenderComponent extends CommonEditComponent {

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
