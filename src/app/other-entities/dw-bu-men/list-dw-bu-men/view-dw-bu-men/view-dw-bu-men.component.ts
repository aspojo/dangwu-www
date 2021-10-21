import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DwBuMenFieldInfoService} from '../dw-bu-men-field-info-service';
import {DwBuMenService} from '../dw-bu-men-service';

@Component({
  selector: 'app-view-dw-bu-men',
  templateUrl: './view-dw-bu-men.component.html',
  styleUrls: ['./view-dw-bu-men.component.scss'],
})
export class ViewDwBuMenComponent extends CommonViewComponent {
  @Input() viewDwBuMen: any;

  get viewData() {
    return this.viewDwBuMen;
  }
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
