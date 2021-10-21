import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwTrainComponent} from './edit-dw-train.component';

const routes: Routes = [
  {path: '', component: EditDwTrainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwTrainRoutingModule {
}
