import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule} from '@shared-modules/input';
import {DateTimeInputModule} from '@shared-modules/input';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {UploadFileModule} from '@shared-modules/upload-file';
import {CommonSelectModule} from '@shared-modules/select';
import {SharedPipesModule} from '@shared-pipes';
import {SelectUserModule} from '@shared-modules/select-user';
import {SelectDeptModule} from '@shared-modules/select-dept';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDwProfessionalRoutingModule} from './list-dw-professional-routing.module';
import {EditDwProfessionalModule} from './edit-dw-professional/edit-dw-professional.module';
import {DwProfessionalFieldInfoService} from './dw-professional-field-info-service';
import {DwProfessionalService} from './dw-professional-service';
import {ViewDwProfessionalModule} from './view-dw-professional/view-dw-professional.module';
import {ListDwProfessionalComponent} from './list-dw-professional.component';
import {SelectDwGeneralPartyModule} from '../../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';

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
        ListDwProfessionalRoutingModule,
        EditDwProfessionalModule,
        ViewDwProfessionalModule,
        CommonSelectModule
    ],
  declarations: [ListDwProfessionalComponent],
  exports: [ListDwProfessionalComponent],
  providers: [DwProfessionalFieldInfoService, DwProfessionalService]
})
export class ListDwProfessionalModule {
}
