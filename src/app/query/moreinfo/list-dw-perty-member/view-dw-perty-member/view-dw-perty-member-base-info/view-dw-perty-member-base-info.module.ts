import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwPertyMemberFieldInfoService} from '../../dw-perty-member-field-info-service';
import {ViewDwPertyMemberBaseInfoComponent} from './view-dw-perty-member-base-info.component';

@NgModule({
  imports: [
    CommonModule,
    ImageViewModule,

  ],
  declarations: [ViewDwPertyMemberBaseInfoComponent],
  exports: [ViewDwPertyMemberBaseInfoComponent],
  providers: [DwPertyMemberFieldInfoService]
})
export class ViewDwPertyMemberBaseInfoModule {
}
