import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwPertyMemberFieldInfoService} from '../dw-perty-member-field-info-service';
import {DwPertyMemberService} from '../dw-perty-member-service';
import {ViewDwPertyMemberRoutingModule} from './view-dw-perty-member-routing.module';
import {ViewDwPertyMemberComponent} from './view-dw-perty-member.component';
import {ViewDwPertyMemberBaseInfoModule} from './view-dw-perty-member-base-info/view-dw-perty-member-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwPertyMemberRoutingModule,
    ViewDwPertyMemberBaseInfoModule,
  ],
  declarations: [ViewDwPertyMemberComponent],
  exports: [ViewDwPertyMemberComponent],
  entryComponents: [ViewDwPertyMemberComponent],
  providers: [DwPertyMemberFieldInfoService, DwPertyMemberService],
})
export class ViewDwPertyMemberModule {
}
