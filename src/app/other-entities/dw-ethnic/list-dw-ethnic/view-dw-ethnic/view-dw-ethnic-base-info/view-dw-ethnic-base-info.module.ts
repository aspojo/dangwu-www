import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwEthnicFieldInfoService} from '../../dw-ethnic-field-info-service';
import {ViewDwEthnicBaseInfoComponent} from './view-dw-ethnic-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwEthnicBaseInfoComponent],
  exports: [ViewDwEthnicBaseInfoComponent],
  providers: [DwEthnicFieldInfoService]
})
export class ViewDwEthnicBaseInfoModule {
}
