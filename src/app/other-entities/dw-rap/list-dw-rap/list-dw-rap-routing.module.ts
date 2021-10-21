import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwRapComponent} from './list-dw-rap.component';

const routes: Routes = [
    {path: '', component: ListDwRapComponent},
    {path: 'editDwRap/:formPK', loadChildren: './edit-dw-rap/edit-dw-rap.module#EditDwRapModule'},
    {path: 'viewDwRap/:formPK', loadChildren: './view-dw-rap/view-dw-rap.module#ViewDwRapModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwRapRoutingModule {
}
