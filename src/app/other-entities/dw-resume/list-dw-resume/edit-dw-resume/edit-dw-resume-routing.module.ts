import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwResumeComponent} from './edit-dw-resume.component';

const routes: Routes = [
  {path: '', component: EditDwResumeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwResumeRoutingModule {
}
