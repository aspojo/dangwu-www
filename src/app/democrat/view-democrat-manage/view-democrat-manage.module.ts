import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DemocratManageFieldInfoService} from '../democrat-manage-field-info-service';
import {DemocratManageService} from '../democrat-manage-service';
import {ViewDemocratManageRoutingModule} from './view-democrat-manage-routing.module';
import {ViewDemocratManageComponent} from './view-democrat-manage.component';
import {ViewDemocratManageBaseInfoModule} from './view-democrat-manage-base-info/view-democrat-manage-base-info.module';
import {ListDwTrainModule} from '../../other-entities/dw-train/list-dw-train/list-dw-train.module';
import {ListDwRapModule} from '../../other-entities/dw-rap/list-dw-rap/list-dw-rap.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDemocratManageRoutingModule,
    ViewDemocratManageBaseInfoModule,
    ListDwTrainModule,
    ListDwRapModule,
  ],
  declarations: [ViewDemocratManageComponent],
  exports: [ViewDemocratManageComponent],
  entryComponents: [ViewDemocratManageComponent],
  providers: [DemocratManageFieldInfoService, DemocratManageService],
})
export class ViewDemocratManageModule {
}
