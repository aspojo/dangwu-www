import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DataSourceFieldInfoService} from '../data-source-field-info-service';
import {DataSourceService} from '../data-source-service';
import {ViewDataSourceRoutingModule} from './view-data-source-routing.module';
import {ViewDataSourceComponent} from './view-data-source.component';
import {ViewDataSourceBaseInfoModule} from './view-data-source-base-info/view-data-source-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDataSourceRoutingModule,
    ViewDataSourceBaseInfoModule,
  ],
  declarations: [ViewDataSourceComponent],
  exports: [ViewDataSourceComponent],
  entryComponents: [ViewDataSourceComponent],
  providers: [DataSourceFieldInfoService, DataSourceService],
})
export class ViewDataSourceModule {
}
