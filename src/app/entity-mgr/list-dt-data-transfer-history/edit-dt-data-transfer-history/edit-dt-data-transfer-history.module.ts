import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {SelectUserModule} from '@shared-modules/select-user';
import {SharedPipesModule} from '@shared-pipes';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {EditDtDataTransferHistoryRoutingModule} from './edit-dt-data-transfer-history-routing.module';
import {EditDtDataTransferHistoryComponent} from './edit-dt-data-transfer-history.component';
import {ViewDtDataTransferHistoryModule} from '../view-dt-data-transfer-history/view-dt-data-transfer-history.module';
import {DtDataTransferHistoryFieldInfoService} from '../dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from '../dt-data-transfer-history-service';
import {UploadFileModule} from '@shared-modules/upload-file';
import {SelectDtDataTransferModelModule} from '../../list-dt-data-transfer-model/select-dt-data-transfer-model/select-dt-data-transfer-model.module';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    ConfirmModule,
    DicSelectModule,
    UploadFileModule,
    SelectUserModule,
    SharedPipesModule,
    CommonPopOrPageModule,
    EditDtDataTransferHistoryRoutingModule,
    ViewDtDataTransferHistoryModule,
    SelectDtDataTransferModelModule,
    AttachmentFilesModule
  ],
  declarations: [EditDtDataTransferHistoryComponent],
  exports: [EditDtDataTransferHistoryComponent],
  entryComponents: [EditDtDataTransferHistoryComponent],
  providers: [DtDataTransferHistoryFieldInfoService, DtDataTransferHistoryService],
})
export class EditDtDataTransferHistoryModule {
}
