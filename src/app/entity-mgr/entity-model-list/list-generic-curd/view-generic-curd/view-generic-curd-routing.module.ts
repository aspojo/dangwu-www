import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewGenericCurdComponent} from './view-generic-curd.component';

const routes: Routes = [
  {path: '', component: ViewGenericCurdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewGenericCurdRoutingModule {
}
