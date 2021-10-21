import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwAssessmentComponent} from './edit-dw-assessment.component';

const routes: Routes = [
  {path: '', component: EditDwAssessmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwAssessmentRoutingModule {
}
