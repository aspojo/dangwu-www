import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwGeneralPartyFieldInfoService} from '../../dw-general-party-field-info-service';
import {ViewDwGeneralPartyBaseInfoComponent} from './view-dw-general-party-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwGeneralPartyBaseInfoComponent],
  exports: [ViewDwGeneralPartyBaseInfoComponent],
  providers: [DwGeneralPartyFieldInfoService]
})
export class ViewDwGeneralPartyBaseInfoModule {
}
