import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDemoOrderComponent} from './view-demo-order.component';

const routes: Routes = [
  {path: '', component: ViewDemoOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDemoOrderRoutingModule {
}
