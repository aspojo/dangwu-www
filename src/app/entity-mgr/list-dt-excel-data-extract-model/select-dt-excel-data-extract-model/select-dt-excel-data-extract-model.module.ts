import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CommonSelectModule} from '@shared-modules/select';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {SelectDtExcelDataExtractModelComponent} from './select-dt-excel-data-extract-model.component';
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
    SelectDtExcelTemplateFileModule,
    CommonSelectModule,
  ],
  declarations: [SelectDtExcelDataExtractModelComponent],
  exports: [SelectDtExcelDataExtractModelComponent],
  providers: [DtExcelDataExtractModelFieldInfoService, DtExcelDataExtractModelService]
})
export class SelectDtExcelDataExtractModelModule {
}
