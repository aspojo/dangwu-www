import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwRapComponent} from './view-dw-rap.component';

const routes: Routes = [
  {path: '', component: ViewDwRapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwRapRoutingModule {
}
