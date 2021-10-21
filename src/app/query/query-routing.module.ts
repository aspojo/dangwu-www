import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {path: 'moreinfo', loadChildren: './moreinfo/list-dw-perty-member/list-dw-perty-member.module#ListDwPertyMemberModule'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule {
}
