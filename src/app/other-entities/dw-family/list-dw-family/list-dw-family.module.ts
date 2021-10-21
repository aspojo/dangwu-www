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
import {ListDwFamilyRoutingModule} from './list-dw-family-routing.module';
import {EditDwFamilyModule} from './edit-dw-family/edit-dw-family.module';
import {DwFamilyFieldInfoService} from './dw-family-field-info-service';
import {DwFamilyService} from './dw-family-service';
import {ViewDwFamilyModule} from './view-dw-family/view-dw-family.module';
import {ListDwFamilyComponent} from './list-dw-family.component';


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
    ListDwFamilyRoutingModule,
    EditDwFamilyModule,
    ViewDwFamilyModule
  ],
  declarations: [ListDwFamilyComponent],
  exports: [ListDwFamilyComponent],
  providers: [DwFamilyFieldInfoService, DwFamilyService]
})
export class ListDwFamilyModule {
}
