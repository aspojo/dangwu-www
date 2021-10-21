import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwBuMenFieldInfoService} from '../dw-bu-men-field-info-service';
import {DwBuMenService} from '../dw-bu-men-service';


@Component({
  selector: 'app-edit-dw-bu-men',
  templateUrl: './edit-dw-bu-men.component.html',
  styleUrls: ['./edit-dw-bu-men.component.scss'],
})
export class EditDwBuMenComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwBuMenService,
    public fieldInfoService: DwBuMenFieldInfoService,
  ) {
    super();
  }


}
