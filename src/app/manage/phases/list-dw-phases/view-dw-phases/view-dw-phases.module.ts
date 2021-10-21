import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwPhasesFieldInfoService} from '../dw-phases-field-info-service';
import {DwPhasesService} from '../dw-phases-service';
import {ViewDwPhasesRoutingModule} from './view-dw-phases-routing.module';
import {ViewDwPhasesComponent} from './view-dw-phases.component';
import {ViewDwPhasesBaseInfoModule} from './view-dw-phases-base-info/view-dw-phases-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwPhasesRoutingModule,
    ViewDwPhasesBaseInfoModule,
  ],
  declarations: [ViewDwPhasesComponent],
  exports: [ViewDwPhasesComponent],
  entryComponents: [ViewDwPhasesComponent],
  providers: [DwPhasesFieldInfoService, DwPhasesService],
})
export class ViewDwPhasesModule {
}
