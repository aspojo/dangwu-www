import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwTitlesComponent} from './list-dw-titles.component';

const routes: Routes = [
    {path: '', component: ListDwTitlesComponent},
    {path: 'editDwTitles/:formPK', loadChildren: './edit-dw-titles/edit-dw-titles.module#EditDwTitlesModule'},
    {path: 'viewDwTitles/:formPK', loadChildren: './view-dw-titles/view-dw-titles.module#ViewDwTitlesModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwTitlesRoutingModule {
}
