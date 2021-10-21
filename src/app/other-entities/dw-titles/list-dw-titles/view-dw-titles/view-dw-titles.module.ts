import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwTitlesFieldInfoService} from '../dw-titles-field-info-service';
import {DwTitlesService} from '../dw-titles-service';
import {ViewDwTitlesRoutingModule} from './view-dw-titles-routing.module';
import {ViewDwTitlesComponent} from './view-dw-titles.component';
import {ViewDwTitlesBaseInfoModule} from './view-dw-titles-base-info/view-dw-titles-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwTitlesRoutingModule,
    ViewDwTitlesBaseInfoModule,
  ],
  declarations: [ViewDwTitlesComponent],
  exports: [ViewDwTitlesComponent],
  entryComponents: [ViewDwTitlesComponent],
  providers: [DwTitlesFieldInfoService, DwTitlesService],
})
export class ViewDwTitlesModule {
}
