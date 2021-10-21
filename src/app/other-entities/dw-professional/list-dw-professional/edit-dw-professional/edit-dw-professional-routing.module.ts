import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwProfessionalComponent} from './edit-dw-professional.component';

const routes: Routes = [
  {path: '', component: EditDwProfessionalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwProfessionalRoutingModule {
}
