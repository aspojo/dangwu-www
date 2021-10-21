import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {GenericCurdFieldInfoService} from '../generic-curd-field-info-service';
import {GenericCurdService} from '../generic-curd-service';
import {ViewGenericCurdRoutingModule} from './view-generic-curd-routing.module';
import {ViewGenericCurdComponent} from './view-generic-curd.component';
import {ViewGenericCurdBaseInfoModule} from './view-generic-curd-base-info/view-generic-curd-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewGenericCurdRoutingModule,
    ViewGenericCurdBaseInfoModule,
  ],
  declarations: [ViewGenericCurdComponent],
  exports: [ViewGenericCurdComponent],
  entryComponents: [ViewGenericCurdComponent],
  providers: [GenericCurdFieldInfoService, GenericCurdService],
})
export class ViewGenericCurdModule {
}
