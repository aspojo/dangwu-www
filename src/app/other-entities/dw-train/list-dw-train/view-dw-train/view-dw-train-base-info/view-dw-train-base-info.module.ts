import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwTrainFieldInfoService} from '../../dw-train-field-info-service';
import {ViewDwTrainBaseInfoComponent} from './view-dw-train-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwTrainBaseInfoComponent],
  exports: [ViewDwTrainBaseInfoComponent],
  providers: [DwTrainFieldInfoService]
})
export class ViewDwTrainBaseInfoModule {
}
