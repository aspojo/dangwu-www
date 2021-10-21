import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwRapFieldInfoService} from '../dw-rap-field-info-service';
import {DwRapService} from '../dw-rap-service';
import {ViewDwRapRoutingModule} from './view-dw-rap-routing.module';
import {ViewDwRapComponent} from './view-dw-rap.component';
import {ViewDwRapBaseInfoModule} from './view-dw-rap-base-info/view-dw-rap-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwRapRoutingModule,
    ViewDwRapBaseInfoModule,
  ],
  declarations: [ViewDwRapComponent],
  exports: [ViewDwRapComponent],
  entryComponents: [ViewDwRapComponent],
  providers: [DwRapFieldInfoService, DwRapService],
})
export class ViewDwRapModule {
}
