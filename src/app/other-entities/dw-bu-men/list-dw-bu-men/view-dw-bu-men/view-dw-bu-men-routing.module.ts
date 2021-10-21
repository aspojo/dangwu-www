import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwBuMenComponent} from './view-dw-bu-men.component';

const routes: Routes = [
  {path: '', component: ViewDwBuMenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwBuMenRoutingModule {
}
