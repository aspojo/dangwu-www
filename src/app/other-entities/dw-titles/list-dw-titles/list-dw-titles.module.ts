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
import {ListDwTitlesRoutingModule} from './list-dw-titles-routing.module';
import {EditDwTitlesModule} from './edit-dw-titles/edit-dw-titles.module';
import {DwTitlesFieldInfoService} from './dw-titles-field-info-service';
import {DwTitlesService} from './dw-titles-service';
import {ViewDwTitlesModule} from './view-dw-titles/view-dw-titles.module';
import {ListDwTitlesComponent} from './list-dw-titles.component';


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
    ListDwTitlesRoutingModule,
    EditDwTitlesModule,
    ViewDwTitlesModule
  ],
  declarations: [ListDwTitlesComponent],
  exports: [ListDwTitlesComponent],
  providers: [DwTitlesFieldInfoService, DwTitlesService]
})
export class ListDwTitlesModule {
}
