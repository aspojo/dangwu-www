import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwGeneralPartyFieldInfoService} from '../dw-general-party-field-info-service';
import {DwGeneralPartyService} from '../dw-general-party-service';

@Component({
  selector: 'app-view-dw-general-party',
  templateUrl: './view-dw-general-party.component.html',
  styleUrls: ['./view-dw-general-party.component.scss'],
})
export class ViewDwGeneralPartyComponent extends CommonViewComponent {
  @Input() viewDwGeneralParty: any;

  get viewData() {
    return this.viewDwGeneralParty;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwGeneralPartyService,
    public fieldInfoService: DwGeneralPartyFieldInfoService,
  ) {
    super();
  }
}
