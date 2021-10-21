import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwPhasesComponent} from './edit-dw-phases.component';

const routes: Routes = [
  {path: '', component: EditDwPhasesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwPhasesRoutingModule {
}
