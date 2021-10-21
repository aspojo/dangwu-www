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


import {EditDwRapRoutingModule} from './edit-dw-rap-routing.module';
import {EditDwRapComponent} from './edit-dw-rap.component';
import {ViewDwRapModule} from '../view-dw-rap/view-dw-rap.module';
import {DwRapFieldInfoService} from '../dw-rap-field-info-service';
import {DwRapService} from '../dw-rap-service';

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
    EditDwRapRoutingModule,
    ViewDwRapModule,
  ],
  declarations: [EditDwRapComponent],
  exports: [EditDwRapComponent],
  entryComponents: [EditDwRapComponent],
  providers: [DwRapFieldInfoService, DwRapService],
})
export class EditDwRapModule {
}
