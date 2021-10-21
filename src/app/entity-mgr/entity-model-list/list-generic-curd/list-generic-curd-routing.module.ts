import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListGenericCurdComponent} from './list-generic-curd.component';

const routes: Routes = [
    {path: '', component: ListGenericCurdComponent},
    {path: 'editGenericCurd/:formPK', loadChildren: './edit-generic-curd/edit-generic-curd.module#EditGenericCurdModule'},
    {path: 'viewGenericCurd/:formPK', loadChildren: './view-generic-curd/view-generic-curd.module#ViewGenericCurdModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListGenericCurdRoutingModule {
}
