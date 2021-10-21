import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwGenderComponent} from './view-dw-gender.component';

const routes: Routes = [
  {path: '', component: ViewDwGenderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwGenderRoutingModule {
}
