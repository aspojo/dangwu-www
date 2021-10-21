import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDemoOrderComponent} from './edit-demo-order.component';

const routes: Routes = [
  {path: '', component: EditDemoOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDemoOrderRoutingModule {
}
