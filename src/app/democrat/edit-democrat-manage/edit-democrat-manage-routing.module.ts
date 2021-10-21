import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDemocratManageComponent} from './edit-democrat-manage.component';

const routes: Routes = [
  {path: '', component: EditDemocratManageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDemocratManageRoutingModule {
}
