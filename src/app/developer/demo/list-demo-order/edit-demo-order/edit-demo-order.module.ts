import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonSelectModule} from '@shared-modules/select';
import {SharedPipesModule} from '@shared-pipes';
import {SelectUserModule} from '@shared-modules/select-user';
import {SelectDeptModule} from '@shared-modules/select-dept';
import {TrueFalseSelectModule} from '@shared-modules/true-false-select';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';


import {EditDemoOrderRoutingModule} from './edit-demo-order-routing.module';
import {EditDemoOrderComponent} from './edit-demo-order.component';
import {ViewDemoOrderModule} from '../view-demo-order/view-demo-order.module';
import {DemoOrderFieldInfoService} from '../demo-order-field-info-service';
import {DemoOrderService} from '../demo-order-service';
import {AttachmentFilesModule} from '@shared-modules/attachment-files';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    ConfirmModule,
    DicSelectModule,
    CommonSelectModule,
    SelectUserModule,
    CommonPopOrPageModule,
    EditDemoOrderRoutingModule,
    ViewDemoOrderModule,
    AttachmentFilesModule
  ],
  declarations: [EditDemoOrderComponent],
  exports: [EditDemoOrderComponent],
  entryComponents: [EditDemoOrderComponent],
  providers: [DemoOrderFieldInfoService, DemoOrderService],
})
export class EditDemoOrderModule {
}
