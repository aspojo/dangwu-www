import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewDataSourceComponent} from './view-data-source.component';

const routes: Routes = [
  {path: '', component: ViewDataSourceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDataSourceRoutingModule {
}
