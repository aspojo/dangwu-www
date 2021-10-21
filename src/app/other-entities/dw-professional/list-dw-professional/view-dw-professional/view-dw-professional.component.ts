import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwProfessionalFieldInfoService} from '../dw-professional-field-info-service';
import {DwProfessionalService} from '../dw-professional-service';

@Component({
  selector: 'app-view-dw-professional',
  templateUrl: './view-dw-professional.component.html',
  styleUrls: ['./view-dw-professional.component.scss'],
})
export class ViewDwProfessionalComponent extends CommonViewComponent {
  @Input() viewDwProfessional: any;

  get viewData() {
    return this.viewDwProfessional;
  }
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
}
