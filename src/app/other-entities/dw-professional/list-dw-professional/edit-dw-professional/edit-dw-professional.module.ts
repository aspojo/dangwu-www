import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';

import {EditDwProfessionalRoutingModule} from './edit-dw-professional-routing.module';
import {EditDwProfessionalComponent} from './edit-dw-professional.component';
import {ViewDwProfessionalModule} from '../view-dw-professional/view-dw-professional.module';
import {DwProfessionalFieldInfoService} from '../dw-professional-field-info-service';
import {DwProfessionalService} from '../dw-professional-service';
import {SelectDwGeneralPartyModule} from '../../../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';

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
    CommonPopOrPageModule,
    EditDwProfessionalRoutingModule,
    ViewDwProfessionalModule,
  ],
  declarations: [EditDwProfessionalComponent],
  exports: [EditDwProfessionalComponent],
  entryComponents: [EditDwProfessionalComponent],
  providers: [DwProfessionalFieldInfoService, DwProfessionalService],
})
export class EditDwProfessionalModule {
}
