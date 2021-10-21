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

import {EditDwPertyMemberManageRoutingModule} from './edit-dw-perty-member-manage-routing.module';
import {EditDwPertyMemberManageComponent} from './edit-dw-perty-member-manage.component';
import {ViewDwPertyMemberManageModule} from '../view-dw-perty-member-manage/view-dw-perty-member-manage.module';
import {DwPertyMemberManageFieldInfoService} from '../dw-perty-member-manage-field-info-service';
import {DwPertyMemberManageService} from '../dw-perty-member-manage-service';
import {SelectDwBuMenModule} from '../../../other-entities/dw-bu-men/list-dw-bu-men/select-dw-bu-men/select-dw-bu-men.module';
import {SelectDwTitlesModule} from '../../../other-entities/dw-titles/list-dw-titles/select-dw-titles/select-dw-titles.module';
import {SelectDwProfessionalModule} from '../../../other-entities/dw-professional/list-dw-professional/select-dw-professional/select-dw-professional.module';
import {SelectDwEthnicModule} from '../../../other-entities/dw-ethnic/list-dw-ethnic/select-dw-ethnic/select-dw-ethnic.module';
import {SelectDwDemocratModule} from '../../../manage/democrat/list-dw-democrat/select-dw-democrat/select-dw-democrat.module';
import {SelectDwGeneralPartyModule} from '../../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';
import {UploadImageModule} from '@shared-modules/upload-image';
import {SelectDwPhasesModule} from '../../../manage/phases/list-dw-phases/select-dw-phases/select-dw-phases.module';
import {CommonEditModule} from '@shared-common/edit';
import {EditDwRelationshipModule} from '../../../other-entities/dw-relationship/list-dw-relationship/edit-dw-relationship/edit-dw-relationship.module';
import {EditDwRelationshipComponent} from '../../../other-entities/dw-relationship/list-dw-relationship/edit-dw-relationship/edit-dw-relationship.component';
import {SharedPipesModule} from '@shared-pipes';

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
    SelectDwDemocratModule,
    SelectDwEthnicModule,
    SelectDwProfessionalModule,
    SelectDwTitlesModule,
    CommonSelectModule,
    CommonPopOrPageModule,
    EditDwPertyMemberManageRoutingModule,
    ViewDwPertyMemberManageModule,
    UploadImageModule,
    SelectDwPhasesModule,
    CommonEditModule,
    EditDwRelationshipModule,
    SharedPipesModule,
  ],
  declarations: [EditDwPertyMemberManageComponent],
  exports: [EditDwPertyMemberManageComponent, EditDwRelationshipComponent],
  entryComponents: [EditDwPertyMemberManageComponent],
  providers: [DwPertyMemberManageFieldInfoService, DwPertyMemberManageService],
})
export class EditDwPertyMemberManageModule {
}
