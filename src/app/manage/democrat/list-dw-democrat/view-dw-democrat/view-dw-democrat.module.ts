import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwDemocratFieldInfoService} from '../dw-democrat-field-info-service';
import {DwDemocratService} from '../dw-democrat-service';
import {ViewDwDemocratRoutingModule} from './view-dw-democrat-routing.module';
import {ViewDwDemocratComponent} from './view-dw-democrat.component';
import {ViewDwDemocratBaseInfoModule} from './view-dw-democrat-base-info/view-dw-democrat-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwDemocratRoutingModule,
    ViewDwDemocratBaseInfoModule,
  ],
  declarations: [ViewDwDemocratComponent],
  exports: [ViewDwDemocratComponent],
  entryComponents: [ViewDwDemocratComponent],
  providers: [DwDemocratFieldInfoService, DwDemocratService],
})
export class ViewDwDemocratModule {
}
