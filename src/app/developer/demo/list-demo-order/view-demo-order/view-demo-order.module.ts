import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {HandleTaskModule} from '@shared-common/task';

import {DemoOrderFieldInfoService} from '../demo-order-field-info-service';
import {DemoOrderService} from '../demo-order-service';
import {ViewDemoOrderRoutingModule} from './view-demo-order-routing.module';
import {ViewDemoOrderComponent} from './view-demo-order.component';
import {ViewDemoOrderBaseInfoModule} from './view-demo-order-base-info/view-demo-order-base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AttachmentFilesModule,
    CommonPopOrPageModule,
    HandleTaskModule,
    ViewDemoOrderRoutingModule,
    ViewDemoOrderBaseInfoModule,
  ],
  declarations: [ViewDemoOrderComponent],
  exports: [ViewDemoOrderComponent],
  entryComponents: [ViewDemoOrderComponent],
  providers: [DemoOrderFieldInfoService, DemoOrderService],
})
export class ViewDemoOrderModule {
}
