import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwEthnicFieldInfoService} from '../dw-ethnic-field-info-service';
import {DwEthnicService} from '../dw-ethnic-service';


@Component({
  selector: 'app-edit-dw-ethnic',
  templateUrl: './edit-dw-ethnic.component.html',
  styleUrls: ['./edit-dw-ethnic.component.scss'],
})
export class EditDwEthnicComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwEthnicService,
    public fieldInfoService: DwEthnicFieldInfoService,
  ) {
    super();
  }


}
