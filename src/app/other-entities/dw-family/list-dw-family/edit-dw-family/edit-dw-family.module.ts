import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';


import {EditDwFamilyRoutingModule} from './edit-dw-family-routing.module';
import {EditDwFamilyComponent} from './edit-dw-family.component';
import {ViewDwFamilyModule} from '../view-dw-family/view-dw-family.module';
import {DwFamilyFieldInfoService} from '../dw-family-field-info-service';
import {DwFamilyService} from '../dw-family-service';

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
    EditDwFamilyRoutingModule,
    ViewDwFamilyModule,
  ],
  declarations: [EditDwFamilyComponent],
  exports: [EditDwFamilyComponent],
  entryComponents: [EditDwFamilyComponent],
  providers: [DwFamilyFieldInfoService, DwFamilyService],
})
export class EditDwFamilyModule {
}
