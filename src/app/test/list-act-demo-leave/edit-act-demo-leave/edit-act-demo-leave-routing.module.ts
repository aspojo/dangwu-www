import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditActDemoLeaveComponent} from './edit-act-demo-leave.component';

const routes: Routes = [
  {path: '', component: EditActDemoLeaveComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditActDemoLeaveRoutingModule {
}
