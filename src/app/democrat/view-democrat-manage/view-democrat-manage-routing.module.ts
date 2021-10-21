import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDemocratManageComponent} from './view-democrat-manage.component';

const routes: Routes = [
  {path: '', component: ViewDemocratManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDemocratManageRoutingModule {
}
