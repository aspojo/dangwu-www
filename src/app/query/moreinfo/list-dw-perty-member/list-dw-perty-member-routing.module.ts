import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwPertyMemberComponent} from './list-dw-perty-member.component';

const routes: Routes = [
    {path: '', component: ListDwPertyMemberComponent},
    {path: 'editDwPertyMember/:formPK', loadChildren: './edit-dw-perty-member/edit-dw-perty-member.module#EditDwPertyMemberModule'},
    {path: 'viewDwPertyMember/:formPK', loadChildren: './view-dw-perty-member/view-dw-perty-member.module#ViewDwPertyMemberModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwPertyMemberRoutingModule {
}
