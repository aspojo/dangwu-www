import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCadresManageComponent} from './list-cadres-manage.component';

const routes: Routes = [
    {path: '', component: ListCadresManageComponent},
    {path: 'editCadresManage/:formPK', loadChildren: './edit-cadres-manage/edit-cadres-manage.module#EditCadresManageModule'},
    {path: 'viewCadresManage/:formPK', loadChildren: './view-cadres-manage/view-cadres-manage.module#ViewCadresManageModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListCadresManageRoutingModule {
}
