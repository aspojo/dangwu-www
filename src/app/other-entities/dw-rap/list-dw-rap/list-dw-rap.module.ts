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
import {ListDwRapRoutingModule} from './list-dw-rap-routing.module';
import {EditDwRapModule} from './edit-dw-rap/edit-dw-rap.module';
import {DwRapFieldInfoService} from './dw-rap-field-info-service';
import {DwRapService} from './dw-rap-service';
import {ViewDwRapModule} from './view-dw-rap/view-dw-rap.module';
import {ListDwRapComponent} from './list-dw-rap.component';


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
    ListDwRapRoutingModule,
    EditDwRapModule,
    ViewDwRapModule
  ],
  declarations: [ListDwRapComponent],
  exports: [ListDwRapComponent],
  providers: [DwRapFieldInfoService, DwRapService]
})
export class ListDwRapModule {
}
