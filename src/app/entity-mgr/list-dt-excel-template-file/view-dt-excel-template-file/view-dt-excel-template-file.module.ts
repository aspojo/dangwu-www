import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DtExcelTemplateFileFieldInfoService} from '../dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from '../dt-excel-template-file-service';
import {ViewDtExcelTemplateFileRoutingModule} from './view-dt-excel-template-file-routing.module';
import {ViewDtExcelTemplateFileComponent} from './view-dt-excel-template-file.component';
import {ViewDtExcelTemplateFileBaseInfoModule} from './view-dt-excel-template-file-base-info/view-dt-excel-template-file-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDtExcelTemplateFileRoutingModule,
    ViewDtExcelTemplateFileBaseInfoModule,
  ],
  declarations: [ViewDtExcelTemplateFileComponent],
  exports: [ViewDtExcelTemplateFileComponent],
  entryComponents: [ViewDtExcelTemplateFileComponent],
  providers: [DtExcelTemplateFileFieldInfoService, DtExcelTemplateFileService],
})
export class ViewDtExcelTemplateFileModule {
}
