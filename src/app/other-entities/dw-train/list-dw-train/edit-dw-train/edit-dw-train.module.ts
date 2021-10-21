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


import {EditDwTrainRoutingModule} from './edit-dw-train-routing.module';
import {EditDwTrainComponent} from './edit-dw-train.component';
import {ViewDwTrainModule} from '../view-dw-train/view-dw-train.module';
import {DwTrainFieldInfoService} from '../dw-train-field-info-service';
import {DwTrainService} from '../dw-train-service';

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
    EditDwTrainRoutingModule,
    ViewDwTrainModule,
  ],
  declarations: [EditDwTrainComponent],
  exports: [EditDwTrainComponent],
  entryComponents: [EditDwTrainComponent],
  providers: [DwTrainFieldInfoService, DwTrainService],
})
export class EditDwTrainModule {
}
