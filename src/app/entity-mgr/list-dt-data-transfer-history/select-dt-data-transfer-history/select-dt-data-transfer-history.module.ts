import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {SelectUserModule} from '@shared-modules/select-user';
import {SelectDtDataTransferHistoryComponent} from './select-dt-data-transfer-history.component';
import {DtDataTransferHistoryFieldInfoService} from '../dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from '../dt-data-transfer-history-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    ConfirmModule,
    DicSelectModule,
    SelectUserModule,
  ],
  declarations: [SelectDtDataTransferHistoryComponent],
  exports: [SelectDtDataTransferHistoryComponent],
  providers: [DtDataTransferHistoryFieldInfoService, DtDataTransferHistoryService]
})
export class SelectDtDataTransferHistoryModule {
}
