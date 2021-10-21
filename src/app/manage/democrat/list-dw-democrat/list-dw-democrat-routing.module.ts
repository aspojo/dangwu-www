import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwDemocratComponent} from './list-dw-democrat.component';

const routes: Routes = [
    {path: '', component: ListDwDemocratComponent},
    {path: 'editDwDemocrat/:formPK', loadChildren: './edit-dw-democrat/edit-dw-democrat.module#EditDwDemocratModule'},
    {path: 'viewDwDemocrat/:formPK', loadChildren: './view-dw-democrat/view-dw-democrat.module#ViewDwDemocratModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwDemocratRoutingModule {
}
