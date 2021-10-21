import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {MyDateTimePickerModule} from '@shared-services/datetime';
import {PageHeaderModule} from '@shared-modules/page-header';
import {SelectUserModule} from '@shared-modules/select-user';
import {SharedPipesModule} from '@shared-pipes';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDtDataTransferHistoryRoutingModule} from './list-dt-data-transfer-history-routing.module';
import {EditDtDataTransferHistoryModule} from './edit-dt-data-transfer-history/edit-dt-data-transfer-history.module';
import {DtDataTransferHistoryFieldInfoService} from './dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from './dt-data-transfer-history-service';
import {ViewDtDataTransferHistoryModule} from './view-dt-data-transfer-history/view-dt-data-transfer-history.module';
import {ListDtDataTransferHistoryComponent} from './list-dt-data-transfer-history.component';
import {DtDataTransferModelFieldInfoService} from '../list-dt-data-transfer-model/dt-data-transfer-model-field-info-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    MyDateTimePickerModule.forRoot(),
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    SelectUserModule,
    SharedPipesModule,
    ListDtDataTransferHistoryRoutingModule,
    EditDtDataTransferHistoryModule,
    ViewDtDataTransferHistoryModule
  ],
  declarations: [ListDtDataTransferHistoryComponent],
  exports: [ListDtDataTransferHistoryComponent],
  providers: [DtDataTransferHistoryFieldInfoService, DtDataTransferHistoryService, DtDataTransferModelFieldInfoService]
})
export class ListDtDataTransferHistoryModule {
}
