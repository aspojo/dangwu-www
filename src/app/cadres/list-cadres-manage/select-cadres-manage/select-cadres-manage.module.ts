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
import {SelectCadresManageComponent} from './select-cadres-manage.component';
import {CadresManageFieldInfoService} from '../cadres-manage-field-info-service';
import {CadresManageService} from '../cadres-manage-service';
import {SelectDwBuMenModule} from '../../../other-entities/dw-bu-men/list-dw-bu-men/select-dw-bu-men/select-dw-bu-men.module';
import {SelectDwTitlesModule} from '../../../other-entities/dw-titles/list-dw-titles/select-dw-titles/select-dw-titles.module';
import {SelectDwProfessionalModule} from '../../../other-entities/dw-professional/list-dw-professional/select-dw-professional/select-dw-professional.module';
import {SelectDwEthnicModule} from '../../../other-entities/dw-ethnic/list-dw-ethnic/select-dw-ethnic/select-dw-ethnic.module';
import {SelectDwDemocratModule} from '../../../manage/democrat/list-dw-democrat/select-dw-democrat/select-dw-democrat.module';
import {SelectDwGeneralPartyModule} from '../../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';

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
    SelectDwBuMenModule,
    SelectDwGeneralPartyModule,
    SelectDwDemocratModule,
    SelectDwEthnicModule,
    SelectDwProfessionalModule,
    SelectDwTitlesModule,
    CommonSelectModule,
  ],
  declarations: [SelectCadresManageComponent],
  exports: [SelectCadresManageComponent],
  providers: [CadresManageFieldInfoService, CadresManageService]
})
export class SelectCadresManageModule {
}
