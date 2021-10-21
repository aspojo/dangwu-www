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
import {ListDtDataTransferModelRoutingModule} from './list-dt-data-transfer-model-routing.module';
import {EditDtDataTransferModelModule} from './edit-dt-data-transfer-model/edit-dt-data-transfer-model.module';
import {DtDataTransferModelFieldInfoService} from './dt-data-transfer-model-field-info-service';
import {DtDataTransferModelService} from './dt-data-transfer-model-service';
import {ViewDtDataTransferModelModule} from './view-dt-data-transfer-model/view-dt-data-transfer-model.module';
import {ListDtDataTransferModelComponent} from './list-dt-data-transfer-model.component';
import {SelectDtExcelDataExtractModelModule} from '../list-dt-excel-data-extract-model/select-dt-excel-data-extract-model/select-dt-excel-data-extract-model.module';

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
    SelectDtExcelDataExtractModelModule,
    CommonSelectModule,
    ListDtDataTransferModelRoutingModule,
    EditDtDataTransferModelModule,
    ViewDtDataTransferModelModule
  ],
  declarations: [ListDtDataTransferModelComponent],
  exports: [ListDtDataTransferModelComponent],
  providers: [DtDataTransferModelFieldInfoService, DtDataTransferModelService]
})
export class ListDtDataTransferModelModule {
}
