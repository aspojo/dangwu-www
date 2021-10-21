import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DtExcelTemplateFileFieldInfoService} from '../../dt-excel-template-file-field-info-service';
import {ViewDtExcelTemplateFileBaseInfoComponent} from './view-dt-excel-template-file-base-info.component';
import {SharedPipesModule} from '@shared-pipes';

@NgModule({
  imports: [
    CommonModule,
    SharedPipesModule,

  ],
  declarations: [ViewDtExcelTemplateFileBaseInfoComponent],
  exports: [ViewDtExcelTemplateFileBaseInfoComponent],
  providers: [DtExcelTemplateFileFieldInfoService]
})
export class ViewDtExcelTemplateFileBaseInfoModule {
}
