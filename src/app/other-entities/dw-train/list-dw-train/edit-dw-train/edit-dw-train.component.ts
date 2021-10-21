import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwTrainFieldInfoService} from '../dw-train-field-info-service';
import {DwTrainService} from '../dw-train-service';


@Component({
  selector: 'app-edit-dw-train',
  templateUrl: './edit-dw-train.component.html',
  styleUrls: ['./edit-dw-train.component.scss'],
})
export class EditDwTrainComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwTrainService,
    public fieldInfoService: DwTrainFieldInfoService,
  ) {
    super();
  }


}
