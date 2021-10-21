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


import {EditDwGenderRoutingModule} from './edit-dw-gender-routing.module';
import {EditDwGenderComponent} from './edit-dw-gender.component';
import {ViewDwGenderModule} from '../view-dw-gender/view-dw-gender.module';
import {DwGenderFieldInfoService} from '../dw-gender-field-info-service';
import {DwGenderService} from '../dw-gender-service';

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
    EditDwGenderRoutingModule,
    ViewDwGenderModule,
  ],
  declarations: [EditDwGenderComponent],
  exports: [EditDwGenderComponent],
  entryComponents: [EditDwGenderComponent],
  providers: [DwGenderFieldInfoService, DwGenderService],
})
export class EditDwGenderModule {
}
