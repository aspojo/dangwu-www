import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewCadresManageComponent} from './view-cadres-manage.component';

const routes: Routes = [
  {path: '', component: ViewCadresManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCadresManageRoutingModule {
}
