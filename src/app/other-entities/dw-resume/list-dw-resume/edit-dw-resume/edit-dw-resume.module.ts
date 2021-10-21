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


import {EditDwResumeRoutingModule} from './edit-dw-resume-routing.module';
import {EditDwResumeComponent} from './edit-dw-resume.component';
import {ViewDwResumeModule} from '../view-dw-resume/view-dw-resume.module';
import {DwResumeFieldInfoService} from '../dw-resume-field-info-service';
import {DwResumeService} from '../dw-resume-service';

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
    EditDwResumeRoutingModule,
    ViewDwResumeModule,
  ],
  declarations: [EditDwResumeComponent],
  exports: [EditDwResumeComponent],
  entryComponents: [EditDwResumeComponent],
  providers: [DwResumeFieldInfoService, DwResumeService],
})
export class EditDwResumeModule {
}
