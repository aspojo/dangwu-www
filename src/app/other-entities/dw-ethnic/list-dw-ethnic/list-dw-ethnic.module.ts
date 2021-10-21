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
import {ListDwEthnicRoutingModule} from './list-dw-ethnic-routing.module';
import {EditDwEthnicModule} from './edit-dw-ethnic/edit-dw-ethnic.module';
import {DwEthnicFieldInfoService} from './dw-ethnic-field-info-service';
import {DwEthnicService} from './dw-ethnic-service';
import {ViewDwEthnicModule} from './view-dw-ethnic/view-dw-ethnic.module';
import {ListDwEthnicComponent} from './list-dw-ethnic.component';


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
    ListDwEthnicRoutingModule,
    EditDwEthnicModule,
    ViewDwEthnicModule
  ],
  declarations: [ListDwEthnicComponent],
  exports: [ListDwEthnicComponent],
  providers: [DwEthnicFieldInfoService, DwEthnicService]
})
export class ListDwEthnicModule {
}
