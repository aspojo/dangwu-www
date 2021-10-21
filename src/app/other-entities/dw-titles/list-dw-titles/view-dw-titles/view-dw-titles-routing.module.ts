import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwTitlesComponent} from './view-dw-titles.component';

const routes: Routes = [
  {path: '', component: ViewDwTitlesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwTitlesRoutingModule {
}
