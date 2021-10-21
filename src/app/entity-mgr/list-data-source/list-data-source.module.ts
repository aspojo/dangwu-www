import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CommonSelectModule} from '@shared-modules/select';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {PageHeaderModule} from '@shared-modules/page-header';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDataSourceRoutingModule} from './list-data-source-routing.module';
import {EditDataSourceModule} from './edit-data-source/edit-data-source.module';
import {DataSourceFieldInfoService} from './data-source-field-info-service';
import {DataSourceService} from './data-source-service';
import {ViewDataSourceModule} from './view-data-source/view-data-source.module';
import {ListDataSourceComponent} from './list-data-source.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlDateTimeModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    CommonSelectModule,
    ListDataSourceRoutingModule,
    EditDataSourceModule,
    ViewDataSourceModule
  ],
  declarations: [ListDataSourceComponent],
  exports: [ListDataSourceComponent],
  providers: [DataSourceFieldInfoService, DataSourceService]
})
export class ListDataSourceModule {
}
