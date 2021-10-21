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
import {EditDtDataTransferModelRoutingModule} from './edit-dt-data-transfer-model-routing.module';
import {EditDtDataTransferModelComponent} from './edit-dt-data-transfer-model.component';
import {ViewDtDataTransferModelModule} from '../view-dt-data-transfer-model/view-dt-data-transfer-model.module';
import {DtDataTransferModelFieldInfoService} from '../dt-data-transfer-model-field-info-service';
import {DtDataTransferModelService} from '../dt-data-transfer-model-service';
import {SelectDtExcelDataExtractModelModule} from '../../list-dt-excel-data-extract-model/select-dt-excel-data-extract-model/select-dt-excel-data-extract-model.module';

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
    SelectDtExcelDataExtractModelModule,
    CommonSelectModule,
    CommonPopOrPageModule,
    EditDtDataTransferModelRoutingModule,
    ViewDtDataTransferModelModule,
  ],
  declarations: [EditDtDataTransferModelComponent],
  exports: [EditDtDataTransferModelComponent],
  entryComponents: [EditDtDataTransferModelComponent],
  providers: [DtDataTransferModelFieldInfoService, DtDataTransferModelService],
})
export class EditDtDataTransferModelModule {
}
