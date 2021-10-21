import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwTrainFieldInfoService} from '../dw-train-field-info-service';
import {DwTrainService} from '../dw-train-service';

@Component({
  selector: 'app-view-dw-train',
  templateUrl: './view-dw-train.component.html',
  styleUrls: ['./view-dw-train.component.scss'],
})
export class ViewDwTrainComponent extends CommonViewComponent {
  @Input() viewDwTrain: any;

  get viewData() {
    return this.viewDwTrain;
  }
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
