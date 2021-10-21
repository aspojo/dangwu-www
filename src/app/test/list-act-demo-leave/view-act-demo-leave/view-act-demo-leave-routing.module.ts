import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewActDemoLeaveComponent} from './view-act-demo-leave.component';

const routes: Routes = [
  {path: '', component: ViewActDemoLeaveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewActDemoLeaveRoutingModule {
}
