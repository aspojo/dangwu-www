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
import {ListDwDemocratRoutingModule} from './list-dw-democrat-routing.module';
import {EditDwDemocratModule} from './edit-dw-democrat/edit-dw-democrat.module';
import {DwDemocratFieldInfoService} from './dw-democrat-field-info-service';
import {DwDemocratService} from './dw-democrat-service';
import {ViewDwDemocratModule} from './view-dw-democrat/view-dw-democrat.module';
import {ListDwDemocratComponent} from './list-dw-democrat.component';


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
    ListDwDemocratRoutingModule,
    EditDwDemocratModule,
    ViewDwDemocratModule
  ],
  declarations: [ListDwDemocratComponent],
  exports: [ListDwDemocratComponent],
  providers: [DwDemocratFieldInfoService, DwDemocratService]
})
export class ListDwDemocratModule {
}
