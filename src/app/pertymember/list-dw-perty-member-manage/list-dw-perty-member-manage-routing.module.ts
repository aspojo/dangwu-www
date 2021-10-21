import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwPertyMemberManageComponent} from './list-dw-perty-member-manage.component';

const routes: Routes = [
    {path: '', component: ListDwPertyMemberManageComponent},
    {path: 'editDwPertyMemberManage/:formPK', loadChildren: './edit-dw-perty-member-manage/edit-dw-perty-member-manage.module#EditDwPertyMemberManageModule'},
    {path: 'viewDwPertyMemberManage/:formPK', loadChildren: './view-dw-perty-member-manage/view-dw-perty-member-manage.module#ViewDwPertyMemberManageModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwPertyMemberManageRoutingModule {
}
