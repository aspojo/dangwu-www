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
import {ListCadresManageRoutingModule} from './list-cadres-manage-routing.module';
import {EditCadresManageModule} from './edit-cadres-manage/edit-cadres-manage.module';
import {CadresManageFieldInfoService} from './cadres-manage-field-info-service';
import {CadresManageService} from './cadres-manage-service';
import {ViewCadresManageModule} from './view-cadres-manage/view-cadres-manage.module';
import {ListCadresManageComponent} from './list-cadres-manage.component';
import {SelectDwBuMenModule} from '../../other-entities/dw-bu-men/list-dw-bu-men/select-dw-bu-men/select-dw-bu-men.module';
import {SelectDwTitlesModule} from '../../other-entities/dw-titles/list-dw-titles/select-dw-titles/select-dw-titles.module';
import {SelectDwProfessionalModule} from '../../other-entities/dw-professional/list-dw-professional/select-dw-professional/select-dw-professional.module';
import {SelectDwEthnicModule} from '../../other-entities/dw-ethnic/list-dw-ethnic/select-dw-ethnic/select-dw-ethnic.module';
import {SelectDwDemocratModule} from '../../manage/democrat/list-dw-democrat/select-dw-democrat/select-dw-democrat.module';
import {SelectDwGeneralPartyModule} from '../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';
import {CommonTypeTreeModule} from '@shared-modules/type-tree';
import {EditDwAssessmentModule} from '../../other-entities/dw-assessment/list-dw-assessment/edit-dw-assessment/edit-dw-assessment.module';
import {EditDwAssessmentComponent} from '../../other-entities/dw-assessment/list-dw-assessment/edit-dw-assessment/edit-dw-assessment.component';
import {SharedPipesModule} from '@shared-pipes';
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
        ListCadresManageRoutingModule,
        EditCadresManageModule,
        ViewCadresManageModule,
        CommonTypeTreeModule,
        EditDwAssessmentModule,
        SharedPipesModule,
        GeneralPartyTreeModule,
    ],
  declarations: [ListCadresManageComponent],
  exports: [ListCadresManageComponent],
  providers: [CadresManageFieldInfoService, CadresManageService, EditDwAssessmentComponent]
})
export class ListCadresManageModule {
}
