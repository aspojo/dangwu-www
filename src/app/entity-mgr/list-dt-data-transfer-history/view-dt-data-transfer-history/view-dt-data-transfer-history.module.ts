import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DtDataTransferHistoryFieldInfoService} from '../dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from '../dt-data-transfer-history-service';
import {ViewDtDataTransferHistoryRoutingModule} from './view-dt-data-transfer-history-routing.module';
import {ViewDtDataTransferHistoryComponent} from './view-dt-data-transfer-history.component';
import {ViewDtDataTransferHistoryBaseInfoModule} from './view-dt-data-transfer-history-base-info/view-dt-data-transfer-history-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDtDataTransferHistoryRoutingModule,
    ViewDtDataTransferHistoryBaseInfoModule,
  ],
  declarations: [ViewDtDataTransferHistoryComponent],
  exports: [ViewDtDataTransferHistoryComponent],
  entryComponents: [ViewDtDataTransferHistoryComponent],
  providers: [DtDataTransferHistoryFieldInfoService, DtDataTransferHistoryService],
})
export class ViewDtDataTransferHistoryModule {
}
