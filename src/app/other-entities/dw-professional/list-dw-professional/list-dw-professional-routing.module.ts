import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwProfessionalComponent} from './list-dw-professional.component';

const routes: Routes = [
    {path: '', component: ListDwProfessionalComponent},
    {path: 'editDwProfessional/:formPK', loadChildren: './edit-dw-professional/edit-dw-professional.module#EditDwProfessionalModule'},
    {path: 'viewDwProfessional/:formPK', loadChildren: './view-dw-professional/view-dw-professional.module#ViewDwProfessionalModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwProfessionalRoutingModule {
}
