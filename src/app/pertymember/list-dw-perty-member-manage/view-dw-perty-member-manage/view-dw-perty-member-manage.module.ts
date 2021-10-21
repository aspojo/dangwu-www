import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwPertyMemberManageFieldInfoService} from '../dw-perty-member-manage-field-info-service';
import {DwPertyMemberManageService} from '../dw-perty-member-manage-service';
import {ViewDwPertyMemberManageRoutingModule} from './view-dw-perty-member-manage-routing.module';
import {ViewDwPertyMemberManageComponent} from './view-dw-perty-member-manage.component';
import {ViewDwPertyMemberManageBaseInfoModule} from './view-dw-perty-member-manage-base-info/view-dw-perty-member-manage-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwPertyMemberManageRoutingModule,
    ViewDwPertyMemberManageBaseInfoModule,
  ],
  declarations: [ViewDwPertyMemberManageComponent],
  exports: [ViewDwPertyMemberManageComponent],
  entryComponents: [ViewDwPertyMemberManageComponent],
  providers: [DwPertyMemberManageFieldInfoService, DwPertyMemberManageService],
})
export class ViewDwPertyMemberManageModule {
}
