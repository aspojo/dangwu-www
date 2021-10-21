import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwTitlesFieldInfoService} from '../dw-titles-field-info-service';
import {DwTitlesService} from '../dw-titles-service';


@Component({
  selector: 'app-edit-dw-titles',
  templateUrl: './edit-dw-titles.component.html',
  styleUrls: ['./edit-dw-titles.component.scss'],
})
export class EditDwTitlesComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwTitlesService,
    public fieldInfoService: DwTitlesFieldInfoService,
  ) {
    super();
  }


}
