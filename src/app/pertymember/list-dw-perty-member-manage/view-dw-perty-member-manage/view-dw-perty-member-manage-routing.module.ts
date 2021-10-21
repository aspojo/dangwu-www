import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwPertyMemberManageComponent} from './view-dw-perty-member-manage.component';

const routes: Routes = [
  {path: '', component: ViewDwPertyMemberManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwPertyMemberManageRoutingModule {
}
