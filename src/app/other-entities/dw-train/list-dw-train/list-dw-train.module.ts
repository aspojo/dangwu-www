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
import {ListDwTrainRoutingModule} from './list-dw-train-routing.module';
import {EditDwTrainModule} from './edit-dw-train/edit-dw-train.module';
import {DwTrainFieldInfoService} from './dw-train-field-info-service';
import {DwTrainService} from './dw-train-service';
import {ViewDwTrainModule} from './view-dw-train/view-dw-train.module';
import {ListDwTrainComponent} from './list-dw-train.component';


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
    ListDwTrainRoutingModule,
    EditDwTrainModule,
    ViewDwTrainModule
  ],
  declarations: [ListDwTrainComponent],
  exports: [ListDwTrainComponent],
  providers: [DwTrainFieldInfoService, DwTrainService]
})
export class ListDwTrainModule {
}
