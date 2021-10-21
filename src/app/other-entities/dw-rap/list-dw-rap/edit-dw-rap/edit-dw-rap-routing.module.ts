import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwRapComponent} from './edit-dw-rap.component';

const routes: Routes = [
  {path: '', component: EditDwRapComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwRapRoutingModule {
}
