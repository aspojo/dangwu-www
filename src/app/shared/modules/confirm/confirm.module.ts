import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmComponent} from './confirm.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/*
 使用说明如下:
 1.将confirm文件夹复制到项目相应文件夹
 2.在要使用的module中引入该module，例如：

 import {ConfirmModule} from '../../confirm/confirm.module';

 @NgModule({
  imports: [
    CommonModule,
    DicRoutingModule,
    PageHeaderModule,

    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule
  ],
  declarations: [DicComponent]
})
 export class DicModule {
}
 3.在需要使用确认提示的地方使用指令[confirm] 及(confirmClick)，例如：
 <button [confirm]="'确定删除字典？'" (confirmClick)="doSomething()"></button>


 */
@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  declarations: [ConfirmComponent],
  exports: [ConfirmComponent]
})
export class ConfirmModule {
}
