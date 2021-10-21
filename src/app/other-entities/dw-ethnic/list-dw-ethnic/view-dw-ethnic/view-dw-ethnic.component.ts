import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwEthnicFieldInfoService} from '../dw-ethnic-field-info-service';
import {DwEthnicService} from '../dw-ethnic-service';

@Component({
  selector: 'app-view-dw-ethnic',
  templateUrl: './view-dw-ethnic.component.html',
  styleUrls: ['./view-dw-ethnic.component.scss'],
})
export class ViewDwEthnicComponent extends CommonViewComponent {
  @Input() viewDwEthnic: any;

  get viewData() {
    return this.viewDwEthnic;
  }
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
