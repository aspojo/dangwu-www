import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwRapFieldInfoService} from '../../dw-rap-field-info-service';
import {ViewDwRapBaseInfoComponent} from './view-dw-rap-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwRapBaseInfoComponent],
  exports: [ViewDwRapBaseInfoComponent],
  providers: [DwRapFieldInfoService]
})
export class ViewDwRapBaseInfoModule {
}
