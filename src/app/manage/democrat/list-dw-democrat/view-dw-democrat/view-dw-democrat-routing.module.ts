import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwDemocratComponent} from './view-dw-democrat.component';

const routes: Routes = [
  {path: '', component: ViewDwDemocratComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwDemocratRoutingModule {
}
