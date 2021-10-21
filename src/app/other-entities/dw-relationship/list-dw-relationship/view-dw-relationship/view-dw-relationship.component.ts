import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwRelationshipFieldInfoService} from '../dw-relationship-field-info-service';
import {DwRelationshipService} from '../dw-relationship-service';

@Component({
  selector: 'app-view-dw-relationship',
  templateUrl: './view-dw-relationship.component.html',
  styleUrls: ['./view-dw-relationship.component.scss'],
})
export class ViewDwRelationshipComponent extends CommonViewComponent {
  @Input() viewDwRelationship: any;

  get viewData() {
    return this.viewDwRelationship;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwRelationshipService,
    public fieldInfoService: DwRelationshipFieldInfoService,
  ) {
    super();
  }
}
