import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwPertyMemberManageFieldInfoService} from '../../dw-perty-member-manage-field-info-service';
import {ViewDwPertyMemberManageBaseInfoComponent} from './view-dw-perty-member-manage-base-info.component';

@NgModule({
  imports: [
    CommonModule,
    ImageViewModule,

  ],
  declarations: [ViewDwPertyMemberManageBaseInfoComponent],
  exports: [ViewDwPertyMemberManageBaseInfoComponent],
  providers: [DwPertyMemberManageFieldInfoService]
})
export class ViewDwPertyMemberManageBaseInfoModule {
}
