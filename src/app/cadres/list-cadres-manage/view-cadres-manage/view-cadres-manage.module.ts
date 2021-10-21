import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {CadresManageFieldInfoService} from '../cadres-manage-field-info-service';
import {CadresManageService} from '../cadres-manage-service';
import {ViewCadresManageRoutingModule} from './view-cadres-manage-routing.module';
import {ViewCadresManageComponent} from './view-cadres-manage.component';
import {ViewCadresManageBaseInfoModule} from './view-cadres-manage-base-info/view-cadres-manage-base-info.module';
import {ListDwAssessmentModule} from '../../../other-entities/dw-assessment/list-dw-assessment/list-dw-assessment.module';
import {ListDwResumeModule} from '../../../other-entities/dw-resume/list-dw-resume/list-dw-resume.module';
import {DwAssessmentFieldInfoService} from '../../../other-entities/dw-assessment/list-dw-assessment/dw-assessment-field-info-service';
import {ListDwTrainModule} from '../../../other-entities/dw-train/list-dw-train/list-dw-train.module';
import {ListDwFamilyModule} from '../../../other-entities/dw-family/list-dw-family/list-dw-family.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewCadresManageRoutingModule,
    ViewCadresManageBaseInfoModule,
    ListDwAssessmentModule,
    ListDwResumeModule,
    ListDwAssessmentModule,
    ListDwTrainModule,
    ListDwFamilyModule,
  ],
  declarations: [ViewCadresManageComponent],
  exports: [ViewCadresManageComponent],
  entryComponents: [ViewCadresManageComponent],
  providers: [CadresManageFieldInfoService, CadresManageService, DwAssessmentFieldInfoService],
})
export class ViewCadresManageModule {
}
