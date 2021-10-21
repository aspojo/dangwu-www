import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule} from '@shared-modules/input';
import {DateTimeInputModule} from '@shared-modules/input';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {UploadFileModule} from '@shared-modules/upload-file';
import {CommonSelectModule} from '@shared-modules/select';
import {SharedPipesModule} from '@shared-pipes';
import {SelectUserModule} from '@shared-modules/select-user';
import {SelectDeptModule} from '@shared-modules/select-dept';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDwGenderRoutingModule} from './list-dw-gender-routing.module';
import {EditDwGenderModule} from './edit-dw-gender/edit-dw-gender.module';
import {DwGenderFieldInfoService} from './dw-gender-field-info-service';
import {DwGenderService} from './dw-gender-service';
import {ViewDwGenderModule} from './view-dw-gender/view-dw-gender.module';
import {ListDwGenderComponent} from './list-dw-gender.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    ListDwGenderRoutingModule,
    EditDwGenderModule,
    ViewDwGenderModule
  ],
  declarations: [ListDwGenderComponent],
  exports: [ListDwGenderComponent],
  providers: [DwGenderFieldInfoService, DwGenderService]
})
export class ListDwGenderModule {
}
