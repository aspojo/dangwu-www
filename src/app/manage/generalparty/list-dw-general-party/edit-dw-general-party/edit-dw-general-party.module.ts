import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonSelectModule} from '@shared-modules/select';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';

import {EditDwGeneralPartyRoutingModule} from './edit-dw-general-party-routing.module';
import {EditDwGeneralPartyComponent} from './edit-dw-general-party.component';
import {ViewDwGeneralPartyModule} from '../view-dw-general-party/view-dw-general-party.module';
import {DwGeneralPartyFieldInfoService} from '../dw-general-party-field-info-service';
import {DwGeneralPartyService} from '../dw-general-party-service';
import {SelectDwGeneralPartyModule} from '../select-dw-general-party/select-dw-general-party.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    ConfirmModule,
    DicSelectModule,
    AttachmentFilesModule,
    SelectDwGeneralPartyModule,
    CommonSelectModule,
    CommonPopOrPageModule,
    EditDwGeneralPartyRoutingModule,
    ViewDwGeneralPartyModule,

],
  declarations: [EditDwGeneralPartyComponent],
  exports: [EditDwGeneralPartyComponent],
  entryComponents: [EditDwGeneralPartyComponent],
  providers: [DwGeneralPartyFieldInfoService, DwGeneralPartyService, DwGeneralPartyService],
})
export class EditDwGeneralPartyModule {
}
