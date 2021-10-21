import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemocratComponent} from './democrat.component';

const routes: Routes = [
  {path: '', component: DemocratComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemocratRoutingModule {
}
