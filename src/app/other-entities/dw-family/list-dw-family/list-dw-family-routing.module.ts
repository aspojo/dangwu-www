import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwFamilyComponent} from './list-dw-family.component';

const routes: Routes = [
    {path: '', component: ListDwFamilyComponent},
    {path: 'editDwFamily/:formPK', loadChildren: './edit-dw-family/edit-dw-family.module#EditDwFamilyModule'},
    {path: 'viewDwFamily/:formPK', loadChildren: './view-dw-family/view-dw-family.module#ViewDwFamilyModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwFamilyRoutingModule {
}
