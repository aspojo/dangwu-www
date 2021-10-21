import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwProfessionalComponent} from './view-dw-professional.component';

const routes: Routes = [
  {path: '', component: ViewDwProfessionalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwProfessionalRoutingModule {
}
