import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwGenderComponent} from './edit-dw-gender.component';

const routes: Routes = [
  {path: '', component: EditDwGenderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwGenderRoutingModule {
}
