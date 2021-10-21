import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwTrainComponent} from './view-dw-train.component';

const routes: Routes = [
  {path: '', component: ViewDwTrainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwTrainRoutingModule {
}
