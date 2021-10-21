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


import {EditDwDemocratRoutingModule} from './edit-dw-democrat-routing.module';
import {EditDwDemocratComponent} from './edit-dw-democrat.component';
import {ViewDwDemocratModule} from '../view-dw-democrat/view-dw-democrat.module';
import {DwDemocratFieldInfoService} from '../dw-democrat-field-info-service';
import {DwDemocratService} from '../dw-democrat-service';

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
    EditDwDemocratRoutingModule,
    ViewDwDemocratModule,
  ],
  declarations: [EditDwDemocratComponent],
  exports: [EditDwDemocratComponent],
  entryComponents: [EditDwDemocratComponent],
  providers: [DwDemocratFieldInfoService, DwDemocratService],
})
export class EditDwDemocratModule {
}
