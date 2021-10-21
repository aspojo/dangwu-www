import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {EditGenericCurdRoutingModule} from './edit-generic-curd-routing.module';
import {EditGenericCurdComponent} from './edit-generic-curd.component';
import {ViewGenericCurdModule} from '../view-generic-curd/view-generic-curd.module';
import {GenericCurdFieldInfoService} from '../generic-curd-field-info-service';
import {GenericCurdService} from '../generic-curd-service';
import {DateInputModule} from '@shared-modules/input';
import {DateTimeInputModule} from '@shared-modules/input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    ConfirmModule,
    DicSelectModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    EditGenericCurdRoutingModule,
    ViewGenericCurdModule,
    DateInputModule,
    DateTimeInputModule,
  ],
  declarations: [EditGenericCurdComponent],
  exports: [EditGenericCurdComponent],
  entryComponents: [EditGenericCurdComponent],
  providers: [GenericCurdFieldInfoService, GenericCurdService],
})
export class EditGenericCurdModule {
}
