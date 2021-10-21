import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwPertyMemberComponent} from './view-dw-perty-member.component';

const routes: Routes = [
  {path: '', component: ViewDwPertyMemberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwPertyMemberRoutingModule {
}
