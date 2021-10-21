import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard'},
  {path: 'dic', loadChildren: './dic/dic.module#DicModule'},
  {path: 'logInfo', loadChildren: './log-info/log-info.module#LogInfoModule'},
  {path: 'deptRoleUser', loadChildren: './dept-role-user/dept-role-user.module#DeptRoleUserModule'},
  // {path: 'generalUser', loadChildren: './general-user/general-user.module#GeneralUserModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
