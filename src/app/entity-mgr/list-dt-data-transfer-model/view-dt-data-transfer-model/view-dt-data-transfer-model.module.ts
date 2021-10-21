import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DtDataTransferModelFieldInfoService} from '../dt-data-transfer-model-field-info-service';
import {DtDataTransferModelService} from '../dt-data-transfer-model-service';
import {ViewDtDataTransferModelRoutingModule} from './view-dt-data-transfer-model-routing.module';
import {ViewDtDataTransferModelComponent} from './view-dt-data-transfer-model.component';
import {ViewDtDataTransferModelBaseInfoModule} from './view-dt-data-transfer-model-base-info/view-dt-data-transfer-model-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDtDataTransferModelRoutingModule,
    ViewDtDataTransferModelBaseInfoModule,
  ],
  declarations: [ViewDtDataTransferModelComponent],
  exports: [ViewDtDataTransferModelComponent],
  entryComponents: [ViewDtDataTransferModelComponent],
  providers: [DtDataTransferModelFieldInfoService, DtDataTransferModelService],
})
export class ViewDtDataTransferModelModule {
}
