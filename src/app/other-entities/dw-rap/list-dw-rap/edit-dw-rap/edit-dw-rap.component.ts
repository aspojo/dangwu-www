import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwRapFieldInfoService} from '../dw-rap-field-info-service';
import {DwRapService} from '../dw-rap-service';


@Component({
  selector: 'app-edit-dw-rap',
  templateUrl: './edit-dw-rap.component.html',
  styleUrls: ['./edit-dw-rap.component.scss'],
})
export class EditDwRapComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwRapService,
    public fieldInfoService: DwRapFieldInfoService,
  ) {
    super();
  }


}
