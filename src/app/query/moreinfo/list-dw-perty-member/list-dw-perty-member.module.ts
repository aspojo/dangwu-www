import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonSelectModule} from '@shared-modules/select';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDwPertyMemberRoutingModule} from './list-dw-perty-member-routing.module';
import {EditDwPertyMemberModule} from './edit-dw-perty-member/edit-dw-perty-member.module';
import {DwPertyMemberFieldInfoService} from './dw-perty-member-field-info-service';
import {DwPertyMemberService} from './dw-perty-member-service';
import {ViewDwPertyMemberModule} from './view-dw-perty-member/view-dw-perty-member.module';
import {ListDwPertyMemberComponent} from './list-dw-perty-member.component';
import {SelectDwBuMenModule} from '../../../other-entities/dw-bu-men/list-dw-bu-men/select-dw-bu-men/select-dw-bu-men.module';
import {SelectDwProfessionalModule} from '../../../other-entities/dw-professional/list-dw-professional/select-dw-professional/select-dw-professional.module';
import {SelectDwTitlesModule} from '../../../other-entities/dw-titles/list-dw-titles/select-dw-titles/select-dw-titles.module';
import {SelectDwEthnicModule} from '../../../other-entities/dw-ethnic/list-dw-ethnic/select-dw-ethnic/select-dw-ethnic.module';
import {SelectDwGeneralPartyModule} from '../../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';
import {SelectDwPhasesModule} from '../../../manage/phases/list-dw-phases/select-dw-phases/select-dw-phases.module';
import {SelectDwDemocratModule} from '../../../manage/democrat/list-dw-democrat/select-dw-democrat/select-dw-democrat.module';
import {CommonTypeTreeModule} from '@shared-modules/type-tree';
// import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
// import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    SelectDwBuMenModule,
    SelectDwGeneralPartyModule,
    SelectDwDemocratModule,
    SelectDwEthnicModule,
    SelectDwProfessionalModule,
    SelectDwTitlesModule,
    SelectDwPhasesModule,
    CommonSelectModule,
    ListDwPertyMemberRoutingModule,
    EditDwPertyMemberModule,
    ViewDwPertyMemberModule,
    CommonTypeTreeModule,
    // NgSelectModule
  ],
  declarations: [ListDwPertyMemberComponent],
  exports: [ListDwPertyMemberComponent],
  providers: [DwPertyMemberFieldInfoService, DwPertyMemberService]
})
export class ListDwPertyMemberModule {
}
