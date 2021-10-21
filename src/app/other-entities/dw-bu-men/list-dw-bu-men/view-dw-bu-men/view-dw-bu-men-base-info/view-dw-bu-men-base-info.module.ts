import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwBuMenFieldInfoService} from '../../dw-bu-men-field-info-service';
import {ViewDwBuMenBaseInfoComponent} from './view-dw-bu-men-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwBuMenBaseInfoComponent],
  exports: [ViewDwBuMenBaseInfoComponent],
  providers: [DwBuMenFieldInfoService]
})
export class ViewDwBuMenBaseInfoModule {
}
