import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwTrainFieldInfoService} from '../dw-train-field-info-service';
import {DwTrainService} from '../dw-train-service';
import {ViewDwTrainRoutingModule} from './view-dw-train-routing.module';
import {ViewDwTrainComponent} from './view-dw-train.component';
import {ViewDwTrainBaseInfoModule} from './view-dw-train-base-info/view-dw-train-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwTrainRoutingModule,
    ViewDwTrainBaseInfoModule,
  ],
  declarations: [ViewDwTrainComponent],
  exports: [ViewDwTrainComponent],
  entryComponents: [ViewDwTrainComponent],
  providers: [DwTrainFieldInfoService, DwTrainService],
})
export class ViewDwTrainModule {
}
