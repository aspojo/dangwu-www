import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {EditDtExcelTemplateFileRoutingModule} from './edit-dt-excel-template-file-routing.module';
import {EditDtExcelTemplateFileComponent} from './edit-dt-excel-template-file.component';
import {ViewDtExcelTemplateFileModule} from '../view-dt-excel-template-file/view-dt-excel-template-file.module';
import {DtExcelTemplateFileFieldInfoService} from '../dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from '../dt-excel-template-file-service';
import {UploadFileModule} from '@shared-modules/upload-file';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ConfirmModule,
    DicSelectModule,
    UploadFileModule,
    CommonPopOrPageModule,
    EditDtExcelTemplateFileRoutingModule,
    ViewDtExcelTemplateFileModule,
    AttachmentFilesModule
  ],
  declarations: [EditDtExcelTemplateFileComponent],
  exports: [EditDtExcelTemplateFileComponent],
  entryComponents: [EditDtExcelTemplateFileComponent],
  providers: [DtExcelTemplateFileFieldInfoService, DtExcelTemplateFileService],
})
export class EditDtExcelTemplateFileModule {
}
