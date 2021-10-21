import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {PageHeaderModule} from '@shared-modules/page-header';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListGenericCurdRoutingModule} from './list-generic-curd-routing.module';
import {EditGenericCurdModule} from './edit-generic-curd/edit-generic-curd.module';
import {GenericCurdFieldInfoService} from './generic-curd-field-info-service';
import {GenericCurdService} from './generic-curd-service';
import {ViewGenericCurdModule} from './view-generic-curd/view-generic-curd.module';
import {ListGenericCurdComponent} from './list-generic-curd.component';
import {DateInputModule} from '@shared-modules/input';
import {DateTimeInputModule} from '@shared-modules/input';
import {FieldSettingsModule} from './field-settings/field-settings.module';
import {CommonViewModule} from '@shared-common/view';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    ListGenericCurdRoutingModule,
    EditGenericCurdModule,
    ViewGenericCurdModule,
    DateInputModule,
    DateTimeInputModule,
    FieldSettingsModule,
  ],
  declarations: [ListGenericCurdComponent],
  exports: [ListGenericCurdComponent],
  providers: [GenericCurdFieldInfoService, GenericCurdService]
})
export class ListGenericCurdModule {
}
