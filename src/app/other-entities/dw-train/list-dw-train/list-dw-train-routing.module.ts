import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwTrainComponent} from './list-dw-train.component';

const routes: Routes = [
    {path: '', component: ListDwTrainComponent},
    {path: 'editDwTrain/:formPK', loadChildren: './edit-dw-train/edit-dw-train.module#EditDwTrainModule'},
    {path: 'viewDwTrain/:formPK', loadChildren: './view-dw-train/view-dw-train.module#ViewDwTrainModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwTrainRoutingModule {
}
