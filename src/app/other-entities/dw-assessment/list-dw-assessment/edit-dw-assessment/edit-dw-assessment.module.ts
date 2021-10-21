import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule} from '@shared-modules/input';
import {DateTimeInputModule} from '@shared-modules/input';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonSelectModule} from '@shared-modules/select';
import {SharedPipesModule} from '@shared-pipes';
import {SelectUserModule} from '@shared-modules/select-user';
import {SelectDeptModule} from '@shared-modules/select-dept';
import {TrueFalseSelectModule} from '@shared-modules/true-false-select';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';


import {EditDwAssessmentRoutingModule} from './edit-dw-assessment-routing.module';
import {EditDwAssessmentComponent} from './edit-dw-assessment.component';
import {ViewDwAssessmentModule} from '../view-dw-assessment/view-dw-assessment.module';
import {DwAssessmentFieldInfoService} from '../dw-assessment-field-info-service';
import {DwAssessmentService} from '../dw-assessment-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    ConfirmModule,
    DicSelectModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    EditDwAssessmentRoutingModule,
    ViewDwAssessmentModule,
  ],
  declarations: [EditDwAssessmentComponent],
  exports: [EditDwAssessmentComponent],
  entryComponents: [EditDwAssessmentComponent],
  providers: [DwAssessmentFieldInfoService, DwAssessmentService],
})
export class EditDwAssessmentModule {
}
