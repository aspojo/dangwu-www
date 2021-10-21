import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwFamilyFieldInfoService} from '../dw-family-field-info-service';
import {DwFamilyService} from '../dw-family-service';


@Component({
  selector: 'app-edit-dw-family',
  templateUrl: './edit-dw-family.component.html',
  styleUrls: ['./edit-dw-family.component.scss'],
})
export class EditDwFamilyComponent extends CommonEditComponent {

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
