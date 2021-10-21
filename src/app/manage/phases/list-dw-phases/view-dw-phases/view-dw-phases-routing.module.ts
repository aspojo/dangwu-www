import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwPhasesComponent} from './view-dw-phases.component';

const routes: Routes = [
  {path: '', component: ViewDwPhasesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwPhasesRoutingModule {
}
