import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwPhasesComponent} from './list-dw-phases.component';

const routes: Routes = [
    {path: '', component: ListDwPhasesComponent},
    {path: 'editDwPhases/:formPK', loadChildren: './edit-dw-phases/edit-dw-phases.module#EditDwPhasesModule'},
    {path: 'viewDwPhases/:formPK', loadChildren: './view-dw-phases/view-dw-phases.module#ViewDwPhasesModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwPhasesRoutingModule {
}
