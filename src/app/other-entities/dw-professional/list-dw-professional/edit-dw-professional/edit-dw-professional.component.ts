import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwProfessionalFieldInfoService} from '../dw-professional-field-info-service';
import {DwProfessionalService} from '../dw-professional-service';
import {Auth} from '@shared-services/auth';


@Component({
  selector: 'app-edit-dw-professional',
  templateUrl: './edit-dw-professional.component.html',
  styleUrls: ['./edit-dw-professional.component.scss'],
})
export class EditDwProfessionalComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwProfessionalService,
    public fieldInfoService: DwProfessionalFieldInfoService,
  ) {
    super();
  }

  afterInit() {
    super.afterGetOne();
    this.editDataTemp.generalId = Auth.userData.generalPartyId;
    this.editDataTemp.professionalHistory = 0;
  }
}
