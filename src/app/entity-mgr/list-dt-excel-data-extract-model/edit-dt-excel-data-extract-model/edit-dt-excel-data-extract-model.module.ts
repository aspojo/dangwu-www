import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CommonSelectModule} from '@shared-modules/select';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {EditDtExcelDataExtractModelRoutingModule} from './edit-dt-excel-data-extract-model-routing.module';
import {EditDtExcelDataExtractModelComponent} from './edit-dt-excel-data-extract-model.component';
import {ViewDtExcelDataExtractModelModule} from '../view-dt-excel-data-extract-model/view-dt-excel-data-extract-model.module';
import {DtExcelDataExtractModelFieldInfoService} from '../dt-excel-data-extract-model-field-info-service';
import {DtExcelDataExtractModelService} from '../dt-excel-data-extract-model-service';
import {SelectDtExcelTemplateFileModule} from '../../list-dt-excel-template-file/select-dt-excel-template-file/select-dt-excel-template-file.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    ConfirmModule,
    DicSelectModule,
    AttachmentFilesModule,
    SelectDtExcelTemplateFileModule,
    CommonSelectModule,
    CommonPopOrPageModule,
    EditDtExcelDataExtractModelRoutingModule,
    ViewDtExcelDataExtractModelModule,
  ],
  declarations: [EditDtExcelDataExtractModelComponent],
  exports: [EditDtExcelDataExtractModelComponent],
  entryComponents: [EditDtExcelDataExtractModelComponent],
  providers: [DtExcelDataExtractModelFieldInfoService, DtExcelDataExtractModelService],
})
export class EditDtExcelDataExtractModelModule {
}
