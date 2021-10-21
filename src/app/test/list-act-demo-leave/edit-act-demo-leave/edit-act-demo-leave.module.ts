import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {EditActDemoLeaveRoutingModule} from './edit-act-demo-leave-routing.module';
import {EditActDemoLeaveComponent} from './edit-act-demo-leave.component';
import {ViewActDemoLeaveModule} from '../view-act-demo-leave/view-act-demo-leave.module';
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
    AttachmentFilesModule,
    CommonPopOrPageModule,
    EditActDemoLeaveRoutingModule,
    ViewActDemoLeaveModule,
  ],
  declarations: [EditActDemoLeaveComponent],
  exports: [EditActDemoLeaveComponent],
  entryComponents: [EditActDemoLeaveComponent],
  providers: [ActDemoLeaveFieldInfoService, ActDemoLeaveService],
})
export class EditActDemoLeaveModule {
}
