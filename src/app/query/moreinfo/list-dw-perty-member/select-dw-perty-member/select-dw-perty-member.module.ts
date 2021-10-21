import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonSelectModule} from '@shared-modules/select';
import {SelectDwPertyMemberComponent} from './select-dw-perty-member.component';
import {DwPertyMemberFieldInfoService} from '../dw-perty-member-field-info-service';
import {DwPertyMemberService} from '../dw-perty-member-service';
import {SelectDwBuMenModule} from '../../../../other-entities/dw-bu-men/list-dw-bu-men/select-dw-bu-men/select-dw-bu-men.module';
import {SelectDwGeneralPartyModule} from '../../../../manage/generalparty/list-dw-general-party/select-dw-general-party/select-dw-general-party.module';
import {SelectDwTitlesModule} from '../../../../other-entities/dw-titles/list-dw-titles/select-dw-titles/select-dw-titles.module';
import {SelectDwProfessionalModule} from '../../../../other-entities/dw-professional/list-dw-professional/select-dw-professional/select-dw-professional.module';
import {SelectDwEthnicModule} from '../../../../other-entities/dw-ethnic/list-dw-ethnic/select-dw-ethnic/select-dw-ethnic.module';
import {SelectDwPhasesModule} from '../../../../manage/phases/list-dw-phases/select-dw-phases/select-dw-phases.module';
import {SelectDwDemocratModule} from '../../../../manage/democrat/list-dw-democrat/select-dw-democrat/select-dw-democrat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    ConfirmModule,
    SelectDwBuMenModule,
    DicSelectModule,
    SelectDwGeneralPartyModule,
    SelectDwDemocratModule,
    SelectDwEthnicModule,
    SelectDwProfessionalModule,
    SelectDwTitlesModule,
    SelectDwPhasesModule,
    CommonSelectModule,
  ],
  declarations: [SelectDwPertyMemberComponent],
  exports: [SelectDwPertyMemberComponent],
  providers: [DwPertyMemberFieldInfoService, DwPertyMemberService]
})
export class SelectDwPertyMemberModule {
}
