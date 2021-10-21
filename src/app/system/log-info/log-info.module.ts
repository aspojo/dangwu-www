import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LogInfoRoutingModule} from './log-info-routing.module';
import {LogInfoComponent} from './log-info.component';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {PageHeaderModule} from '@shared-modules/page-header';


@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    LogInfoRoutingModule,
    ConfirmModule,
    DicSelectModule,
    NgbModule
  ],
  declarations: [LogInfoComponent]
})
export class LogInfoModule {
}
