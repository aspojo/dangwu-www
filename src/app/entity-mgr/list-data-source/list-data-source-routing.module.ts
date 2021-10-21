import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListDataSourceComponent} from './list-data-source.component';

const routes: Routes = [
    {path: '', component: ListDataSourceComponent},
    {path: 'editDataSource/:formPK', loadChildren: './edit-data-source/edit-data-source.module#EditDataSourceModule'},
    {path: 'viewDataSource/:formPK', loadChildren: './view-data-source/view-data-source.module#ViewDataSourceModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDataSourceRoutingModule {
}
