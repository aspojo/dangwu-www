import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CommonSelectModule} from '@shared-modules/select';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {EditDataSourceRoutingModule} from './edit-data-source-routing.module';
import {EditDataSourceComponent} from './edit-data-source.component';
import {ViewDataSourceModule} from '../view-data-source/view-data-source.module';
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
    AttachmentFilesModule,
    CommonSelectModule,
    CommonPopOrPageModule,
    EditDataSourceRoutingModule,
    ViewDataSourceModule,
  ],
  declarations: [EditDataSourceComponent],
  exports: [EditDataSourceComponent],
  entryComponents: [EditDataSourceComponent],
  providers: [DataSourceFieldInfoService, DataSourceService],
})
export class EditDataSourceModule {
}
