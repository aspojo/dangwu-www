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


import {EditDwBuMenRoutingModule} from './edit-dw-bu-men-routing.module';
import {EditDwBuMenComponent} from './edit-dw-bu-men.component';
import {ViewDwBuMenModule} from '../view-dw-bu-men/view-dw-bu-men.module';
import {DwBuMenFieldInfoService} from '../dw-bu-men-field-info-service';
import {DwBuMenService} from '../dw-bu-men-service';

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
    EditDwBuMenRoutingModule,
    ViewDwBuMenModule,
  ],
  declarations: [EditDwBuMenComponent],
  exports: [EditDwBuMenComponent],
  entryComponents: [EditDwBuMenComponent],
  providers: [DwBuMenFieldInfoService, DwBuMenService],
})
export class EditDwBuMenModule {
}
