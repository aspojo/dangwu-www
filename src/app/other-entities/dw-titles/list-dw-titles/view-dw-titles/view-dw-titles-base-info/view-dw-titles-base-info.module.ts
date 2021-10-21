import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwTitlesFieldInfoService} from '../../dw-titles-field-info-service';
import {ViewDwTitlesBaseInfoComponent} from './view-dw-titles-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwTitlesBaseInfoComponent],
  exports: [ViewDwTitlesBaseInfoComponent],
  providers: [DwTitlesFieldInfoService]
})
export class ViewDwTitlesBaseInfoModule {
}
