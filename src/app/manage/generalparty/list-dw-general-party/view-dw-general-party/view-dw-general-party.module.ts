import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwGeneralPartyFieldInfoService} from '../dw-general-party-field-info-service';
import {DwGeneralPartyService} from '../dw-general-party-service';
import {ViewDwGeneralPartyRoutingModule} from './view-dw-general-party-routing.module';
import {ViewDwGeneralPartyComponent} from './view-dw-general-party.component';
import {ViewDwGeneralPartyBaseInfoModule} from './view-dw-general-party-base-info/view-dw-general-party-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwGeneralPartyRoutingModule,
    ViewDwGeneralPartyBaseInfoModule,
  ],
  declarations: [ViewDwGeneralPartyComponent],
  exports: [ViewDwGeneralPartyComponent],
  entryComponents: [ViewDwGeneralPartyComponent],
  providers: [DwGeneralPartyFieldInfoService, DwGeneralPartyService],
})
export class ViewDwGeneralPartyModule {
}
