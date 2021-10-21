import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';
import {ImageViewModule} from '@shared-modules/image-view';
//error import: ImageViewModule
import {DwAssessmentFieldInfoService} from '../../dw-assessment-field-info-service';
import {ViewDwAssessmentBaseInfoComponent} from './view-dw-assessment-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDwAssessmentBaseInfoComponent],
  exports: [ViewDwAssessmentBaseInfoComponent],
  providers: [DwAssessmentFieldInfoService]
})
export class ViewDwAssessmentBaseInfoModule {
}
