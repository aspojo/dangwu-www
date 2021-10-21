import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageViewModule} from '@shared-modules/image-view';
import {DemocratManageFieldInfoService} from '../../democrat-manage-field-info-service';
import {ViewDemocratManageBaseInfoComponent} from './view-democrat-manage-base-info.component';

@NgModule({
  imports: [
    CommonModule,
    ImageViewModule,

  ],
  declarations: [ViewDemocratManageBaseInfoComponent],
  exports: [ViewDemocratManageBaseInfoComponent],
  providers: [DemocratManageFieldInfoService]
})
export class ViewDemocratManageBaseInfoModule {
}
