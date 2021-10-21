import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwRelationshipFieldInfoService} from '../../dw-relationship-field-info-service';
import {ViewDwRelationshipBaseInfoComponent} from './view-dw-relationship-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwRelationshipBaseInfoComponent],
  exports: [ViewDwRelationshipBaseInfoComponent],
  providers: [DwRelationshipFieldInfoService]
})
export class ViewDwRelationshipBaseInfoModule {
}
