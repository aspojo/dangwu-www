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


import {EditDwTitlesRoutingModule} from './edit-dw-titles-routing.module';
import {EditDwTitlesComponent} from './edit-dw-titles.component';
import {ViewDwTitlesModule} from '../view-dw-titles/view-dw-titles.module';
import {DwTitlesFieldInfoService} from '../dw-titles-field-info-service';
import {DwTitlesService} from '../dw-titles-service';

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
    EditDwTitlesRoutingModule,
    ViewDwTitlesModule,
  ],
  declarations: [EditDwTitlesComponent],
  exports: [EditDwTitlesComponent],
  entryComponents: [EditDwTitlesComponent],
  providers: [DwTitlesFieldInfoService, DwTitlesService],
})
export class EditDwTitlesModule {
}
