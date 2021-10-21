import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonSelectModule} from '@shared-modules/select';
import {SelectDwGeneralPartyComponent} from './select-dw-general-party.component';
import {DwGeneralPartyFieldInfoService} from '../dw-general-party-field-info-service';
import {DwGeneralPartyService} from '../dw-general-party-service';

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
    CommonSelectModule,
  ],
  declarations: [SelectDwGeneralPartyComponent],
  exports: [SelectDwGeneralPartyComponent],
  providers: [DwGeneralPartyFieldInfoService, DwGeneralPartyService]
})
export class SelectDwGeneralPartyModule {
}
