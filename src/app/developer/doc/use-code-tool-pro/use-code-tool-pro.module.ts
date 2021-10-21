import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UseCodeToolProComponent} from './use-code-tool-pro.component';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {SharedPipesModule} from '@shared-pipes';
import {TrueFalseSelectModule} from '@shared-modules/true-false-select';
import {HighlightJsModule} from 'ngx-highlight-js';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyDateTimePickerModule} from '../../../shared/services/datetime';
import {UseCodeToolProRoutingModule} from './use-code-tool-pro-routing.module';
import {CommonDataTableModule} from '@shared-common/data-table-directive';
import {ListDemoOrderModule} from '../../demo/list-demo-order/list-demo-order.module';
import {CommonViewModule} from '@shared-common/view';
import {ViewDemoOrderModule} from '../../demo/list-demo-order/view-demo-order/view-demo-order.module';
import {ViewDemoOrderBaseInfoModule} from '../../demo/list-demo-order/view-demo-order/view-demo-order-base-info/view-demo-order-base-info.module';
import {SelectDemoOrderModule} from '../../demo/list-demo-order/select-demo-order/select-demo-order.module';
import {CommonEditModule} from '@shared-common/edit';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MyDateTimePickerModule,
    UseCodeToolProRoutingModule,
    PageHeaderModule,
    FormsModule,
    NgbModule,
    HighlightJsModule,
    TrueFalseSelectModule,
    CommonDataTableModule,
    CommonViewModule,
    CommonEditModule,
    ListDemoOrderModule,
    ViewDemoOrderBaseInfoModule,
    SelectDemoOrderModule,
  ],
  declarations: [UseCodeToolProComponent],
  providers: [
  ]
})
export class UseCodeToolProModule {
}

