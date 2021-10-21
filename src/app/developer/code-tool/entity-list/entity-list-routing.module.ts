import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntityListComponent} from './entity-list.component';

const routes: Routes = [
  {path: '', component: EntityListComponent},
  {path: 'entityEdit/:id', loadChildren: '../entity-edit/entity-edit.module#EntityEditModule'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityListRoutingModule {
}
