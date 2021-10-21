import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwPhasesFieldInfoService} from '../../dw-phases-field-info-service';
import {ViewDwPhasesBaseInfoComponent} from './view-dw-phases-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwPhasesBaseInfoComponent],
  exports: [ViewDwPhasesBaseInfoComponent],
  providers: [DwPhasesFieldInfoService]
})
export class ViewDwPhasesBaseInfoModule {
}
