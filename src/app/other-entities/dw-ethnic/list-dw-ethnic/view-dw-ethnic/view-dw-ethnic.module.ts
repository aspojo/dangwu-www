import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwEthnicFieldInfoService} from '../dw-ethnic-field-info-service';
import {DwEthnicService} from '../dw-ethnic-service';
import {ViewDwEthnicRoutingModule} from './view-dw-ethnic-routing.module';
import {ViewDwEthnicComponent} from './view-dw-ethnic.component';
import {ViewDwEthnicBaseInfoModule} from './view-dw-ethnic-base-info/view-dw-ethnic-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwEthnicRoutingModule,
    ViewDwEthnicBaseInfoModule,
  ],
  declarations: [ViewDwEthnicComponent],
  exports: [ViewDwEthnicComponent],
  entryComponents: [ViewDwEthnicComponent],
  providers: [DwEthnicFieldInfoService, DwEthnicService],
})
export class ViewDwEthnicModule {
}
