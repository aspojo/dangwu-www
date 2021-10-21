import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {ActDemoLeaveFieldInfoService} from '../act-demo-leave-field-info-service';
import {ActDemoLeaveService} from '../act-demo-leave-service';
import {ViewActDemoLeaveRoutingModule} from './view-act-demo-leave-routing.module';
import {ViewActDemoLeaveComponent} from './view-act-demo-leave.component';
import {ViewActDemoLeaveBaseInfoModule} from './view-act-demo-leave-base-info/view-act-demo-leave-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewActDemoLeaveRoutingModule,
    ViewActDemoLeaveBaseInfoModule,
  ],
  declarations: [ViewActDemoLeaveComponent],
  exports: [ViewActDemoLeaveComponent],
  entryComponents: [ViewActDemoLeaveComponent],
  providers: [ActDemoLeaveFieldInfoService, ActDemoLeaveService],
})
export class ViewActDemoLeaveModule {
}
