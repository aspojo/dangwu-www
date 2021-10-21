import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DtExcelDataExtractModelFieldInfoService} from '../../dt-excel-data-extract-model-field-info-service';
import {ViewDtExcelDataExtractModelBaseInfoComponent} from './view-dt-excel-data-extract-model-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDtExcelDataExtractModelBaseInfoComponent],
  exports: [ViewDtExcelDataExtractModelBaseInfoComponent],
  providers: [DtExcelDataExtractModelFieldInfoService]
})
export class ViewDtExcelDataExtractModelBaseInfoModule {
}
