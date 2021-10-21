import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntityEditComponent} from './entity-edit.component';

const routes: Routes = [
  {path: '', component: EntityEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityEditRoutingModule {
}
