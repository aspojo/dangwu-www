import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DtExcelDataExtractModelFieldInfoService} from '../dt-excel-data-extract-model-field-info-service';
import {DtExcelDataExtractModelService} from '../dt-excel-data-extract-model-service';
import {ViewDtExcelDataExtractModelRoutingModule} from './view-dt-excel-data-extract-model-routing.module';
import {ViewDtExcelDataExtractModelComponent} from './view-dt-excel-data-extract-model.component';
import {ViewDtExcelDataExtractModelBaseInfoModule} from './view-dt-excel-data-extract-model-base-info/view-dt-excel-data-extract-model-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDtExcelDataExtractModelRoutingModule,
    ViewDtExcelDataExtractModelBaseInfoModule,
  ],
  declarations: [ViewDtExcelDataExtractModelComponent],
  exports: [ViewDtExcelDataExtractModelComponent],
  entryComponents: [ViewDtExcelDataExtractModelComponent],
  providers: [DtExcelDataExtractModelFieldInfoService, DtExcelDataExtractModelService],
})
export class ViewDtExcelDataExtractModelModule {
}
