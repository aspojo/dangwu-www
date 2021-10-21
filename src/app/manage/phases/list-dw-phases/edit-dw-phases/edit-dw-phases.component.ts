import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwPhasesFieldInfoService} from '../dw-phases-field-info-service';
import {DwPhasesService} from '../dw-phases-service';


@Component({
  selector: 'app-edit-dw-phases',
  templateUrl: './edit-dw-phases.component.html',
  styleUrls: ['./edit-dw-phases.component.scss'],
})
export class EditDwPhasesComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwPhasesService,
    public fieldInfoService: DwPhasesFieldInfoService,
  ) {
    super();
  }


}
