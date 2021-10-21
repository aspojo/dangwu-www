import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwTitlesComponent} from './edit-dw-titles.component';

const routes: Routes = [
  {path: '', component: EditDwTitlesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwTitlesRoutingModule {
}
