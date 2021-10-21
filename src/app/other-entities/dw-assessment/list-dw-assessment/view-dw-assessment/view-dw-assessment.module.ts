import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwAssessmentFieldInfoService} from '../dw-assessment-field-info-service';
import {DwAssessmentService} from '../dw-assessment-service';
import {ViewDwAssessmentRoutingModule} from './view-dw-assessment-routing.module';
import {ViewDwAssessmentComponent} from './view-dw-assessment.component';
import {ViewDwAssessmentBaseInfoModule} from './view-dw-assessment-base-info/view-dw-assessment-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwAssessmentRoutingModule,
    ViewDwAssessmentBaseInfoModule,
  ],
  declarations: [ViewDwAssessmentComponent],
  exports: [ViewDwAssessmentComponent],
  entryComponents: [ViewDwAssessmentComponent],
  providers: [DwAssessmentFieldInfoService, DwAssessmentService],
})
export class ViewDwAssessmentModule {
}
