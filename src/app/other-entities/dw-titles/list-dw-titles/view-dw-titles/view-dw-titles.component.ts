import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwTitlesFieldInfoService} from '../dw-titles-field-info-service';
import {DwTitlesService} from '../dw-titles-service';

@Component({
  selector: 'app-view-dw-titles',
  templateUrl: './view-dw-titles.component.html',
  styleUrls: ['./view-dw-titles.component.scss'],
})
export class ViewDwTitlesComponent extends CommonViewComponent {
  @Input() viewDwTitles: any;

  get viewData() {
    return this.viewDwTitles;
  }
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
