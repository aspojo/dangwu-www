import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {SelectDwPhasesComponent} from './select-dw-phases.component';

import {DwPhasesFieldInfoService} from '../dw-phases-field-info-service';
import {DwPhasesService} from '../dw-phases-service';

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
  ],
  declarations: [SelectDwPhasesComponent],
  exports: [SelectDwPhasesComponent],
  providers: [DwPhasesFieldInfoService, DwPhasesService]
})
export class SelectDwPhasesModule {
}
