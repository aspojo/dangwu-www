import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CommonSelectModule} from '@shared-modules/select';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {SelectDataSourceComponent} from './select-data-source.component';
import {DataSourceFieldInfoService} from '../data-source-field-info-service';
import {DataSourceService} from '../data-source-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    ConfirmModule,
    DicSelectModule,
    CommonSelectModule,
  ],
  declarations: [SelectDataSourceComponent],
  exports: [SelectDataSourceComponent],
  providers: [DataSourceFieldInfoService, DataSourceService]
})
export class SelectDataSourceModule {
}
