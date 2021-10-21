import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwFamilyFieldInfoService} from '../dw-family-field-info-service';
import {DwFamilyService} from '../dw-family-service';
import {ViewDwFamilyRoutingModule} from './view-dw-family-routing.module';
import {ViewDwFamilyComponent} from './view-dw-family.component';
import {ViewDwFamilyBaseInfoModule} from './view-dw-family-base-info/view-dw-family-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwFamilyRoutingModule,
    ViewDwFamilyBaseInfoModule,
  ],
  declarations: [ViewDwFamilyComponent],
  exports: [ViewDwFamilyComponent],
  entryComponents: [ViewDwFamilyComponent],
  providers: [DwFamilyFieldInfoService, DwFamilyService],
})
export class ViewDwFamilyModule {
}
