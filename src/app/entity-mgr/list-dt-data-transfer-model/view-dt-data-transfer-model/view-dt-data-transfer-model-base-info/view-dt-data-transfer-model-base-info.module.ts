import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DtDataTransferModelFieldInfoService} from '../../dt-data-transfer-model-field-info-service';
import {ViewDtDataTransferModelBaseInfoComponent} from './view-dt-data-transfer-model-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDtDataTransferModelBaseInfoComponent],
  exports: [ViewDtDataTransferModelBaseInfoComponent],
  providers: [DtDataTransferModelFieldInfoService]
})
export class ViewDtDataTransferModelBaseInfoModule {
}
