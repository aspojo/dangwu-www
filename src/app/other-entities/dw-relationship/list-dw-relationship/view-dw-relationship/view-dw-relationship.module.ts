import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DwRelationshipFieldInfoService} from '../dw-relationship-field-info-service';
import {DwRelationshipService} from '../dw-relationship-service';
import {ViewDwRelationshipRoutingModule} from './view-dw-relationship-routing.module';
import {ViewDwRelationshipComponent} from './view-dw-relationship.component';
import {ViewDwRelationshipBaseInfoModule} from './view-dw-relationship-base-info/view-dw-relationship-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDwRelationshipRoutingModule,
    ViewDwRelationshipBaseInfoModule,
  ],
  declarations: [ViewDwRelationshipComponent],
  exports: [ViewDwRelationshipComponent],
  entryComponents: [ViewDwRelationshipComponent],
  providers: [DwRelationshipFieldInfoService, DwRelationshipService],
})
export class ViewDwRelationshipModule {
}
