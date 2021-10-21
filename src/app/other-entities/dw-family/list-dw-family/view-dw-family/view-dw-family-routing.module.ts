import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwFamilyComponent} from './view-dw-family.component';

const routes: Routes = [
  {path: '', component: ViewDwFamilyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwFamilyRoutingModule {
}
