import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwGenderFieldInfoService} from '../dw-gender-field-info-service';
import {DwGenderService} from '../dw-gender-service';
import {ViewDwGenderRoutingModule} from './view-dw-gender-routing.module';
import {ViewDwGenderComponent} from './view-dw-gender.component';
import {ViewDwGenderBaseInfoModule} from './view-dw-gender-base-info/view-dw-gender-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwGenderRoutingModule,
    ViewDwGenderBaseInfoModule,
  ],
  declarations: [ViewDwGenderComponent],
  exports: [ViewDwGenderComponent],
  entryComponents: [ViewDwGenderComponent],
  providers: [DwGenderFieldInfoService, DwGenderService],
})
export class ViewDwGenderModule {
}
