import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditCadresManageComponent} from './edit-cadres-manage.component';

const routes: Routes = [
  {path: '', component: EditCadresManageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCadresManageRoutingModule {
}
