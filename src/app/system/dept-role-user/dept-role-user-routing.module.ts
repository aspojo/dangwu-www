import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeptRoleUserComponent} from './dept-role-user.component';

const routes: Routes = [
    {path: '', component: DeptRoleUserComponent}
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeptRoleUserRoutingModule {
}
