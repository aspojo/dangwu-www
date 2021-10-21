import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwResumeFieldInfoService} from '../dw-resume-field-info-service';
import {DwResumeService} from '../dw-resume-service';
import {ViewDwResumeRoutingModule} from './view-dw-resume-routing.module';
import {ViewDwResumeComponent} from './view-dw-resume.component';
import {ViewDwResumeBaseInfoModule} from './view-dw-resume-base-info/view-dw-resume-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwResumeRoutingModule,
    ViewDwResumeBaseInfoModule,
  ],
  declarations: [ViewDwResumeComponent],
  exports: [ViewDwResumeComponent],
  entryComponents: [ViewDwResumeComponent],
  providers: [DwResumeFieldInfoService, DwResumeService],
})
export class ViewDwResumeModule {
}
