import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwRapFieldInfoService} from '../dw-rap-field-info-service';
import {DwRapService} from '../dw-rap-service';

@Component({
  selector: 'app-view-dw-rap',
  templateUrl: './view-dw-rap.component.html',
  styleUrls: ['./view-dw-rap.component.scss'],
})
export class ViewDwRapComponent extends CommonViewComponent {
  @Input() viewDwRap: any;

  get viewData() {
    return this.viewDwRap;
  }
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
