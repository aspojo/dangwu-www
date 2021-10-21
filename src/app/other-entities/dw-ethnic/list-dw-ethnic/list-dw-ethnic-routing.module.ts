import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwEthnicComponent} from './list-dw-ethnic.component';

const routes: Routes = [
    {path: '', component: ListDwEthnicComponent},
    {path: 'editDwEthnic/:formPK', loadChildren: './edit-dw-ethnic/edit-dw-ethnic.module#EditDwEthnicModule'},
    {path: 'viewDwEthnic/:formPK', loadChildren: './view-dw-ethnic/view-dw-ethnic.module#ViewDwEthnicModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwEthnicRoutingModule {
}
