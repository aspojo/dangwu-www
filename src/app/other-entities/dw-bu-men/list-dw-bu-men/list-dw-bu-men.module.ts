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
import {ListDwBuMenRoutingModule} from './list-dw-bu-men-routing.module';
import {EditDwBuMenModule} from './edit-dw-bu-men/edit-dw-bu-men.module';
import {DwBuMenFieldInfoService} from './dw-bu-men-field-info-service';
import {DwBuMenService} from './dw-bu-men-service';
import {ViewDwBuMenModule} from './view-dw-bu-men/view-dw-bu-men.module';
import {ListDwBuMenComponent} from './list-dw-bu-men.component';


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
    ListDwBuMenRoutingModule,
    EditDwBuMenModule,
    ViewDwBuMenModule
  ],
  declarations: [ListDwBuMenComponent],
  exports: [ListDwBuMenComponent],
  providers: [DwBuMenFieldInfoService, DwBuMenService]
})
export class ListDwBuMenModule {
}
