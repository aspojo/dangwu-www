import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDwAssessmentRoutingModule} from './list-dw-assessment-routing.module';
import {EditDwAssessmentModule} from './edit-dw-assessment/edit-dw-assessment.module';
import {DwAssessmentFieldInfoService} from './dw-assessment-field-info-service';
import {DwAssessmentService} from './dw-assessment-service';
import {ViewDwAssessmentModule} from './view-dw-assessment/view-dw-assessment.module';
import {ListDwAssessmentComponent} from './list-dw-assessment.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    ListDwAssessmentRoutingModule,
    EditDwAssessmentModule,
    ViewDwAssessmentModule
  ],
  declarations: [ListDwAssessmentComponent],
  exports: [ListDwAssessmentComponent],
  providers: [DwAssessmentFieldInfoService, DwAssessmentService]
})
export class ListDwAssessmentModule {
}
