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
import {ListDwGeneralPartyRoutingModule} from './list-dw-general-party-routing.module';
import {EditDwGeneralPartyModule} from './edit-dw-general-party/edit-dw-general-party.module';
import {DwGeneralPartyFieldInfoService} from './dw-general-party-field-info-service';
import {DwGeneralPartyService} from './dw-general-party-service';
import {ViewDwGeneralPartyModule} from './view-dw-general-party/view-dw-general-party.module';
import {ListDwGeneralPartyComponent} from './list-dw-general-party.component';
import {SelectDwGeneralPartyModule} from './select-dw-general-party/select-dw-general-party.module';
import {DwPertyMemberManageService} from '../../../pertymember/list-dw-perty-member-manage/dw-perty-member-manage-service';
import {ViewDwGeneralPartyBaseInfoModule} from './view-dw-general-party/view-dw-general-party-base-info/view-dw-general-party-base-info.module';

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
    SelectDwGeneralPartyModule,
    CommonSelectModule,
    ListDwGeneralPartyRoutingModule,
    EditDwGeneralPartyModule,
    ViewDwGeneralPartyModule,
    ViewDwGeneralPartyBaseInfoModule
  ],
  declarations: [ListDwGeneralPartyComponent],
  exports: [ListDwGeneralPartyComponent],
  providers: [DwGeneralPartyFieldInfoService, DwGeneralPartyService, DwPertyMemberManageService, DwGeneralPartyService]
})
export class ListDwGeneralPartyModule {
}
