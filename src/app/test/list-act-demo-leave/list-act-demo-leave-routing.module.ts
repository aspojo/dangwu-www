import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListActDemoLeaveComponent} from './list-act-demo-leave.component';

const routes: Routes = [
    {path: '', component: ListActDemoLeaveComponent},
    {path: 'editActDemoLeave/:formPK', loadChildren: './edit-act-demo-leave/edit-act-demo-leave.module#EditActDemoLeaveModule'},
    {path: 'viewActDemoLeave/:formPK', loadChildren: './view-act-demo-leave/view-act-demo-leave.module#ViewActDemoLeaveModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListActDemoLeaveRoutingModule {
}
