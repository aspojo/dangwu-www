import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwBuMenComponent} from './list-dw-bu-men.component';

const routes: Routes = [
    {path: '', component: ListDwBuMenComponent},
    {path: 'editDwBuMen/:formPK', loadChildren: './edit-dw-bu-men/edit-dw-bu-men.module#EditDwBuMenModule'},
    {path: 'viewDwBuMen/:formPK', loadChildren: './view-dw-bu-men/view-dw-bu-men.module#ViewDwBuMenModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwBuMenRoutingModule {
}
