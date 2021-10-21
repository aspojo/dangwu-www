import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDemoOrderComponent} from './list-demo-order.component';

const routes: Routes = [
    {path: '', component: ListDemoOrderComponent},
    {path: 'editDemoOrder/:formPK', loadChildren: './edit-demo-order/edit-demo-order.module#EditDemoOrderModule'},
    {path: 'viewDemoOrder/:formPK', loadChildren: './view-demo-order/view-demo-order.module#ViewDemoOrderModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDemoOrderRoutingModule {
}
