import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwDemocratComponent} from './edit-dw-democrat.component';

const routes: Routes = [
  {path: '', component: EditDwDemocratComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwDemocratRoutingModule {
}
