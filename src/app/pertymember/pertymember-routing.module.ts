import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListDwPertyMemberManageComponent} from './list-dw-perty-member-manage/list-dw-perty-member-manage.component';

const routes: Routes = [
  {path: '', component: ListDwPertyMemberManageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PertymemberRoutingModule {
}
