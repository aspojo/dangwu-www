import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DtExcelTemplateFileFieldInfoService} from '../dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from '../dt-excel-template-file-service';

@Component({
  selector: 'app-view-dt-excel-template-file',
  templateUrl: './view-dt-excel-template-file.component.html',
  styleUrls: ['./view-dt-excel-template-file.component.scss'],
})
export class ViewDtExcelTemplateFileComponent extends CommonViewComponent {
  @Input() viewDtExcelTemplateFile: any;

  get viewData() {
    return this.viewDtExcelTemplateFile;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: DtExcelTemplateFileService,
    public fieldInfoService: DtExcelTemplateFileFieldInfoService,
    public attachmentService: AttachmentService,
  ) {
    super();
  }
}
