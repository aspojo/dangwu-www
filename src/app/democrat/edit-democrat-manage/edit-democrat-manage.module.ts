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

import {EditDemocratManageRoutingModule} from './edit-democrat-manage-routing.module';
import {EditDemocratManageComponent} from './edit-democrat-manage.component';
import {ViewDemocratManageModule} from '../view-democrat-manage/view-democrat-manage.module';
import {DemocratManageFieldInfoService} from '../democrat-manage-field-info-service';
import {DemocratManageService} from '../democrat-manage-service';
import {SelectDwBuMenModule} from '../../other-entities/dw-bu-men/list-dw-bu-men/select-dw-bu-men/select-dw-bu-men.module';
import {SelectDwTitlesModule} from '../../other-entities/dw-titles/list-dw-titles/select-dw-titles/select-dw-titles.module';
import {SelectDwProfessionalModule} from '../../other-entities/dw-professional/list-dw-professional/select-dw-professional/select-dw-professional.module';
import {SelectDwEthnicModule} from '../../other-entities/dw-ethnic/list-dw-ethnic/select-dw-ethnic/select-dw-ethnic.module';
import {SelectDwGeneralPartyModule} from '../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';
import {UploadImageModule} from '@shared-modules/upload-image';
import {CommonEditModule} from '@shared-common/edit';
import {SharedPipesModule} from '@shared-pipes';
import {SelectDwPhasesModule} from '../../manage/phases/list-dw-phases/select-dw-phases/select-dw-phases.module';

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
    SelectDwBuMenModule,
    SelectDwGeneralPartyModule,
    SelectDwEthnicModule,
    SelectDwProfessionalModule,
    SelectDwTitlesModule,
    CommonSelectModule,
    CommonPopOrPageModule,
    EditDemocratManageRoutingModule,
    ViewDemocratManageModule,
    UploadImageModule,
    CommonEditModule,
    SharedPipesModule,
    SelectDwPhasesModule,
  ],
  declarations: [EditDemocratManageComponent],
  exports: [EditDemocratManageComponent],
  entryComponents: [EditDemocratManageComponent],
  providers: [DemocratManageFieldInfoService, DemocratManageService],
})
export class EditDemocratManageModule {
}
