import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwProfessionalFieldInfoService} from '../../dw-professional-field-info-service';
import {ViewDwProfessionalBaseInfoComponent} from './view-dw-professional-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwProfessionalBaseInfoComponent],
  exports: [ViewDwProfessionalBaseInfoComponent],
  providers: [DwProfessionalFieldInfoService]
})
export class ViewDwProfessionalBaseInfoModule {
}
