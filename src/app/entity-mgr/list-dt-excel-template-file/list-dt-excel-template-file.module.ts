import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {MyDateTimePickerModule} from '@shared-services/datetime';
import {PageHeaderModule} from '@shared-modules/page-header';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDtExcelTemplateFileRoutingModule} from './list-dt-excel-template-file-routing.module';
import {EditDtExcelTemplateFileModule} from './edit-dt-excel-template-file/edit-dt-excel-template-file.module';
import {DtExcelTemplateFileFieldInfoService} from './dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from './dt-excel-template-file-service';
import {ViewDtExcelTemplateFileModule} from './view-dt-excel-template-file/view-dt-excel-template-file.module';
import {ListDtExcelTemplateFileComponent} from './list-dt-excel-template-file.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    MyDateTimePickerModule.forRoot(),
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    ListDtExcelTemplateFileRoutingModule,
    EditDtExcelTemplateFileModule,
    ViewDtExcelTemplateFileModule
  ],
  declarations: [ListDtExcelTemplateFileComponent],
  exports: [ListDtExcelTemplateFileComponent],
  providers: [DtExcelTemplateFileFieldInfoService, DtExcelTemplateFileService]
})
export class ListDtExcelTemplateFileModule {
}
