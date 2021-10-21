import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwFamilyFieldInfoService} from '../../dw-family-field-info-service';
import {ViewDwFamilyBaseInfoComponent} from './view-dw-family-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwFamilyBaseInfoComponent],
  exports: [ViewDwFamilyBaseInfoComponent],
  providers: [DwFamilyFieldInfoService]
})
export class ViewDwFamilyBaseInfoModule {
}
