import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwBuMenFieldInfoService} from '../dw-bu-men-field-info-service';
import {DwBuMenService} from '../dw-bu-men-service';
import {ViewDwBuMenRoutingModule} from './view-dw-bu-men-routing.module';
import {ViewDwBuMenComponent} from './view-dw-bu-men.component';
import {ViewDwBuMenBaseInfoModule} from './view-dw-bu-men-base-info/view-dw-bu-men-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwBuMenRoutingModule,
    ViewDwBuMenBaseInfoModule,
  ],
  declarations: [ViewDwBuMenComponent],
  exports: [ViewDwBuMenComponent],
  entryComponents: [ViewDwBuMenComponent],
  providers: [DwBuMenFieldInfoService, DwBuMenService],
})
export class ViewDwBuMenModule {
}
