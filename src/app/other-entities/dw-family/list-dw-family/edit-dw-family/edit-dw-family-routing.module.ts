import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwFamilyComponent} from './edit-dw-family.component';

const routes: Routes = [
  {path: '', component: EditDwFamilyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwFamilyRoutingModule {
}
