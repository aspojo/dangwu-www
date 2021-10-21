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
import {ListDwPertyMemberManageRoutingModule} from './list-dw-perty-member-manage-routing.module';
import {EditDwPertyMemberManageModule} from './edit-dw-perty-member-manage/edit-dw-perty-member-manage.module';
import {DwPertyMemberManageFieldInfoService} from './dw-perty-member-manage-field-info-service';
import {DwPertyMemberManageService} from './dw-perty-member-manage-service';
import {ViewDwPertyMemberManageModule} from './view-dw-perty-member-manage/view-dw-perty-member-manage.module';
import {ListDwPertyMemberManageComponent} from './list-dw-perty-member-manage.component';
import {SelectDwBuMenModule} from '../../other-entities/dw-bu-men/list-dw-bu-men/select-dw-bu-men/select-dw-bu-men.module';
import {SelectDwTitlesModule} from '../../other-entities/dw-titles/list-dw-titles/select-dw-titles/select-dw-titles.module';
import {SelectDwProfessionalModule} from '../../other-entities/dw-professional/list-dw-professional/select-dw-professional/select-dw-professional.module';
import {SelectDwEthnicModule} from '../../other-entities/dw-ethnic/list-dw-ethnic/select-dw-ethnic/select-dw-ethnic.module';
import {SelectDwDemocratModule} from '../../manage/democrat/list-dw-democrat/select-dw-democrat/select-dw-democrat.module';
import {SelectDwGeneralPartyModule} from '../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';
import {CommonTypeTreeModule} from '@shared-modules/type-tree';
import {SelectDwPhasesModule} from '../../manage/phases/list-dw-phases/select-dw-phases/select-dw-phases.module';
import {DownloadModule} from '@shared-modules/download';
import {SharedPipesModule} from '@shared-pipes';
import {UploadFileModule} from '@shared-modules/upload-file';
import {GeneralPartyTreeModule} from "../../shared/modules/general-party-tree/general-party-tree.module";

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
        CommonSelectModule,
        ListDwPertyMemberManageRoutingModule,
        EditDwPertyMemberManageModule,
        ViewDwPertyMemberManageModule,
        CommonTypeTreeModule,
        SelectDwPhasesModule,
        DownloadModule,
        SharedPipesModule,
        UploadFileModule,
        GeneralPartyTreeModule,
        // ChangePartyModule,
    ],
  declarations: [ListDwPertyMemberManageComponent],
  exports: [ListDwPertyMemberManageComponent],
  providers: [DwPertyMemberManageFieldInfoService, DwPertyMemberManageService]
})
export class ListDwPertyMemberManageModule {
}
