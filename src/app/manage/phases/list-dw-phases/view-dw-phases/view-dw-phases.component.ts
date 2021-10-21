import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwPhasesFieldInfoService} from '../dw-phases-field-info-service';
import {DwPhasesService} from '../dw-phases-service';

@Component({
  selector: 'app-view-dw-phases',
  templateUrl: './view-dw-phases.component.html',
  styleUrls: ['./view-dw-phases.component.scss'],
})
export class ViewDwPhasesComponent extends CommonViewComponent {
  @Input() viewDwPhases: any;

  get viewData() {
    return this.viewDwPhases;
  }
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
