import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwDemocratFieldInfoService} from '../../dw-democrat-field-info-service';
import {ViewDwDemocratBaseInfoComponent} from './view-dw-democrat-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwDemocratBaseInfoComponent],
  exports: [ViewDwDemocratBaseInfoComponent],
  providers: [DwDemocratFieldInfoService]
})
export class ViewDwDemocratBaseInfoModule {
}
