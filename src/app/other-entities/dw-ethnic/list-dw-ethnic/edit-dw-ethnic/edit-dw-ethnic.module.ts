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


import {EditDwEthnicRoutingModule} from './edit-dw-ethnic-routing.module';
import {EditDwEthnicComponent} from './edit-dw-ethnic.component';
import {ViewDwEthnicModule} from '../view-dw-ethnic/view-dw-ethnic.module';
import {DwEthnicFieldInfoService} from '../dw-ethnic-field-info-service';
import {DwEthnicService} from '../dw-ethnic-service';

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
    EditDwEthnicRoutingModule,
    ViewDwEthnicModule,
  ],
  declarations: [EditDwEthnicComponent],
  exports: [EditDwEthnicComponent],
  entryComponents: [EditDwEthnicComponent],
  providers: [DwEthnicFieldInfoService, DwEthnicService],
})
export class EditDwEthnicModule {
}
