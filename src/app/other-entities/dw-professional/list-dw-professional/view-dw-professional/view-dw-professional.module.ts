import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwProfessionalFieldInfoService} from '../dw-professional-field-info-service';
import {DwProfessionalService} from '../dw-professional-service';
import {ViewDwProfessionalRoutingModule} from './view-dw-professional-routing.module';
import {ViewDwProfessionalComponent} from './view-dw-professional.component';
import {ViewDwProfessionalBaseInfoModule} from './view-dw-professional-base-info/view-dw-professional-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwProfessionalRoutingModule,
    ViewDwProfessionalBaseInfoModule,
  ],
  declarations: [ViewDwProfessionalComponent],
  exports: [ViewDwProfessionalComponent],
  entryComponents: [ViewDwProfessionalComponent],
  providers: [DwProfessionalFieldInfoService, DwProfessionalService],
})
export class ViewDwProfessionalModule {
}
