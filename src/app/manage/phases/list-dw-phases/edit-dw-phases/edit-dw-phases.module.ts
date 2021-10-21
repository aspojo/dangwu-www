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


import {EditDwPhasesRoutingModule} from './edit-dw-phases-routing.module';
import {EditDwPhasesComponent} from './edit-dw-phases.component';
import {ViewDwPhasesModule} from '../view-dw-phases/view-dw-phases.module';
import {DwPhasesFieldInfoService} from '../dw-phases-field-info-service';
import {DwPhasesService} from '../dw-phases-service';

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
    EditDwPhasesRoutingModule,
    ViewDwPhasesModule,
  ],
  declarations: [EditDwPhasesComponent],
  exports: [EditDwPhasesComponent],
  entryComponents: [EditDwPhasesComponent],
  providers: [DwPhasesFieldInfoService, DwPhasesService],
})
export class EditDwPhasesModule {
}
