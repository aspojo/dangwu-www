import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwBuMenComponent} from './edit-dw-bu-men.component';

const routes: Routes = [
  {path: '', component: EditDwBuMenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwBuMenRoutingModule {
}
