import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwRelationshipComponent} from './list-dw-relationship.component';

const routes: Routes = [
    {path: '', component: ListDwRelationshipComponent},
    {path: 'editDwRelationship/:formPK', loadChildren: './edit-dw-relationship/edit-dw-relationship.module#EditDwRelationshipModule'},
    {path: 'viewDwRelationship/:formPK', loadChildren: './view-dw-relationship/view-dw-relationship.module#ViewDwRelationshipModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwRelationshipRoutingModule {
}
