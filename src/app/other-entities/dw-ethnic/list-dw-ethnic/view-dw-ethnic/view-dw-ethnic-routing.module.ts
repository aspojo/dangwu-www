import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwEthnicComponent} from './view-dw-ethnic.component';

const routes: Routes = [
  {path: '', component: ViewDwEthnicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwEthnicRoutingModule {
}
