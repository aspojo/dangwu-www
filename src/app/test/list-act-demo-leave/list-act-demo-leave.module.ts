import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {PageHeaderModule} from '@shared-modules/page-header';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {ListActDemoLeaveRoutingModule} from './list-act-demo-leave-routing.module';
import {EditActDemoLeaveModule} from './edit-act-demo-leave/edit-act-demo-leave.module';
import {ActDemoLeaveFieldInfoService} from './act-demo-leave-field-info-service';
import {ActDemoLeaveService} from './act-demo-leave-service';
import {ViewActDemoLeaveModule} from './view-act-demo-leave/view-act-demo-leave.module';
import {ListActDemoLeaveComponent} from './list-act-demo-leave.component';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    ListActDemoLeaveRoutingModule,
    EditActDemoLeaveModule,
    ViewActDemoLeaveModule
  ],
  declarations: [ListActDemoLeaveComponent],
  exports: [ListActDemoLeaveComponent],
  providers: [ActDemoLeaveFieldInfoService, ActDemoLeaveService]
})
export class ListActDemoLeaveModule {
}
