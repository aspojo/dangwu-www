import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {MyDateTimePickerModule} from '@shared-services/datetime';
import {SelectDtExcelTemplateFileComponent} from './select-dt-excel-template-file.component';
import {DtExcelTemplateFileFieldInfoService} from '../dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from '../dt-excel-template-file-service';
import {OwlDateTimeModule} from 'ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MyDateTimePickerModule.forRoot(),
    ConfirmModule,
    DicSelectModule,
    OwlDateTimeModule,

  ],
  declarations: [SelectDtExcelTemplateFileComponent],
  exports: [SelectDtExcelTemplateFileComponent],
  providers: [DtExcelTemplateFileFieldInfoService, DtExcelTemplateFileService]
})
export class SelectDtExcelTemplateFileModule {
}
