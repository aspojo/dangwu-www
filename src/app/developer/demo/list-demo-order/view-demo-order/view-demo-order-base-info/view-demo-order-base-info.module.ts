import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DemoOrderFieldInfoService} from '../../demo-order-field-info-service';
import {ViewDemoOrderBaseInfoComponent} from './view-demo-order-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDemoOrderBaseInfoComponent],
  exports: [ViewDemoOrderBaseInfoComponent],
  providers: [DemoOrderFieldInfoService]
})
export class ViewDemoOrderBaseInfoModule {
}
