import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwGenderComponent} from './list-dw-gender.component';

const routes: Routes = [
    {path: '', component: ListDwGenderComponent},
    {path: 'editDwGender/:formPK', loadChildren: './edit-dw-gender/edit-dw-gender.module#EditDwGenderModule'},
    {path: 'viewDwGender/:formPK', loadChildren: './view-dw-gender/view-dw-gender.module#ViewDwGenderModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwGenderRoutingModule {
}
