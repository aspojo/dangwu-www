import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {SelectActDemoLeaveComponent} from './select-act-demo-leave.component';
import {ActDemoLeaveFieldInfoService} from '../act-demo-leave-field-info-service';
import {ActDemoLeaveService} from '../act-demo-leave-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ConfirmModule,
    DicSelectModule,
  ],
  declarations: [SelectActDemoLeaveComponent],
  exports: [SelectActDemoLeaveComponent],
  providers: [ActDemoLeaveFieldInfoService, ActDemoLeaveService]
})
export class SelectActDemoLeaveModule {
}
