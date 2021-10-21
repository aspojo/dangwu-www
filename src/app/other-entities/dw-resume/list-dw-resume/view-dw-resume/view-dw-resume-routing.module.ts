import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwResumeComponent} from './view-dw-resume.component';

const routes: Routes = [
  {path: '', component: ViewDwResumeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwResumeRoutingModule {
}
