import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DtDataTransferHistoryFieldInfoService} from '../../dt-data-transfer-history-field-info-service';
import {ViewDtDataTransferHistoryBaseInfoComponent} from './view-dt-data-transfer-history-base-info.component';
import {SharedPipesModule} from '@shared-pipes';

@NgModule({
  imports: [
    CommonModule,
    SharedPipesModule,

  ],
  declarations: [ViewDtDataTransferHistoryBaseInfoComponent],
  exports: [ViewDtDataTransferHistoryBaseInfoComponent],
  providers: [DtDataTransferHistoryFieldInfoService]
})
export class ViewDtDataTransferHistoryBaseInfoModule {
}
