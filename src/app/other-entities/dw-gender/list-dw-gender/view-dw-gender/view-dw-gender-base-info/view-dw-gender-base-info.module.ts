import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwGenderFieldInfoService} from '../../dw-gender-field-info-service';
import {ViewDwGenderBaseInfoComponent} from './view-dw-gender-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwGenderBaseInfoComponent],
  exports: [ViewDwGenderBaseInfoComponent],
  providers: [DwGenderFieldInfoService]
})
export class ViewDwGenderBaseInfoModule {
}
