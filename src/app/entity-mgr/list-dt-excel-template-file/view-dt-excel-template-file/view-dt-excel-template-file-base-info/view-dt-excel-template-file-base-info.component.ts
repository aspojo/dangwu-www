import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DtExcelTemplateFileFieldInfoService} from '../../dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from '../../dt-excel-template-file-service';


@Component({
  selector: 'app-view-dt-excel-template-file-base-info',
  templateUrl: './view-dt-excel-template-file-base-info.component.html',
})
export class ViewDtExcelTemplateFileBaseInfoComponent extends CommonViewBaseInfo {
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DtExcelTemplateFileService,
              public fieldInfoService: DtExcelTemplateFileFieldInfoService,
  ) {
    super();
  }
}
