import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';


import {EditDwRelationshipRoutingModule} from './edit-dw-relationship-routing.module';
import {EditDwRelationshipComponent} from './edit-dw-relationship.component';
import {ViewDwRelationshipModule} from '../view-dw-relationship/view-dw-relationship.module';
import {DwRelationshipFieldInfoService} from '../dw-relationship-field-info-service';
import {DwRelationshipService} from '../dw-relationship-service';

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
    EditDwRelationshipRoutingModule,
    ViewDwRelationshipModule,
  ],
  declarations: [EditDwRelationshipComponent],
  exports: [EditDwRelationshipComponent],
  entryComponents: [EditDwRelationshipComponent],
  providers: [DwRelationshipFieldInfoService, DwRelationshipService],
})
export class EditDwRelationshipModule {
}
