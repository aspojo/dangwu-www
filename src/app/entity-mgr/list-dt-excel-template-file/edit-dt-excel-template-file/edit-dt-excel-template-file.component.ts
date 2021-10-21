import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttachmentService} from '@shared-services/attachment';
import {EnvironmentService} from '@shared-services/environment';
import {MessageService} from '@shared-services/message';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {DtExcelTemplateFileFieldInfoService} from '../dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from '../dt-excel-template-file-service';

@Component({
  selector: 'app-edit-dt-excel-template-file',
  templateUrl: './edit-dt-excel-template-file.component.html',
  styleUrls: ['./edit-dt-excel-template-file.component.scss'],
})
export class EditDtExcelTemplateFileComponent extends CommonEditComponent {

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


  fileRemove() {
    MessageService.showGlobalMessage('warning', '删除成功，请重新上传文件，并保存数据。');
  }
}
