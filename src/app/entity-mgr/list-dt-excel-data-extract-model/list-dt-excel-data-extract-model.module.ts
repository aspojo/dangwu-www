import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CommonSelectModule} from '@shared-modules/select';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {PageHeaderModule} from '@shared-modules/page-header';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDtExcelDataExtractModelRoutingModule} from './list-dt-excel-data-extract-model-routing.module';
import {EditDtExcelDataExtractModelModule} from './edit-dt-excel-data-extract-model/edit-dt-excel-data-extract-model.module';
import {DtExcelDataExtractModelFieldInfoService} from './dt-excel-data-extract-model-field-info-service';
import {DtExcelDataExtractModelService} from './dt-excel-data-extract-model-service';
import {ViewDtExcelDataExtractModelModule} from './view-dt-excel-data-extract-model/view-dt-excel-data-extract-model.module';
import {ListDtExcelDataExtractModelComponent} from './list-dt-excel-data-extract-model.component';
import {SelectDtExcelTemplateFileModule} from '../list-dt-excel-template-file/select-dt-excel-template-file/select-dt-excel-template-file.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    SelectDtExcelTemplateFileModule,
    CommonSelectModule,
    ListDtExcelDataExtractModelRoutingModule,
    EditDtExcelDataExtractModelModule,
    ViewDtExcelDataExtractModelModule
  ],
  declarations: [ListDtExcelDataExtractModelComponent],
  exports: [ListDtExcelDataExtractModelComponent],
  providers: [DtExcelDataExtractModelFieldInfoService, DtExcelDataExtractModelService]
})
export class ListDtExcelDataExtractModelModule {
}
