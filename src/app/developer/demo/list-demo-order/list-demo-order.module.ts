import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule} from '@shared-modules/input';
import {DateTimeInputModule} from '@shared-modules/input';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {UploadFileModule} from '@shared-modules/upload-file';
import {CommonSelectModule} from '@shared-modules/select';
import {SharedPipesModule} from '@shared-pipes';
import {SelectUserModule} from '@shared-modules/select-user';
import {SelectDeptModule} from '@shared-modules/select-dept';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDemoOrderRoutingModule} from './list-demo-order-routing.module';
import {EditDemoOrderModule} from './edit-demo-order/edit-demo-order.module';
import {DemoOrderFieldInfoService} from './demo-order-field-info-service';
import {DemoOrderService} from './demo-order-service';
import {ViewDemoOrderModule} from './view-demo-order/view-demo-order.module';
import {ListDemoOrderComponent} from './list-demo-order.component';
import {ScanInputModule} from '@shared-modules/scan-input';
// import {AttachmentFilesModule} from '@shared-modules/attachment-files';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    CommonSelectModule,
    SelectUserModule,
    ListDemoOrderRoutingModule,
    EditDemoOrderModule,
    ViewDemoOrderModule,
    ScanInputModule
  ],
  declarations: [ListDemoOrderComponent],
  exports: [ListDemoOrderComponent],
  providers: [DemoOrderFieldInfoService, DemoOrderService]
})
export class ListDemoOrderModule {
}
