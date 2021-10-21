import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwPertyMemberManageComponent} from './edit-dw-perty-member-manage.component';

const routes: Routes = [
  {path: '', component: EditDwPertyMemberManageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwPertyMemberManageRoutingModule {
}
