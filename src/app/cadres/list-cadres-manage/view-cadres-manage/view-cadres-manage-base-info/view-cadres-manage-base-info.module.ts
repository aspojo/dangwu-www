import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {CadresManageFieldInfoService} from '../../cadres-manage-field-info-service';
import {ViewCadresManageBaseInfoComponent} from './view-cadres-manage-base-info.component';

@NgModule({
  imports: [
    CommonModule,
    ImageViewModule,

  ],
  declarations: [ViewCadresManageBaseInfoComponent],
  exports: [ViewCadresManageBaseInfoComponent],
  providers: [CadresManageFieldInfoService]
})
export class ViewCadresManageBaseInfoModule {
}
