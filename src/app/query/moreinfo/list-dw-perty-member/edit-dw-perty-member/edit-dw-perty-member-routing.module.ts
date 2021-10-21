import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwPertyMemberComponent} from './edit-dw-perty-member.component';

const routes: Routes = [
  {path: '', component: EditDwPertyMemberComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwPertyMemberRoutingModule {
}
