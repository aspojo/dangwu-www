import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwAssessmentComponent} from './view-dw-assessment.component';

const routes: Routes = [
  {path: '', component: ViewDwAssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwAssessmentRoutingModule {
}
