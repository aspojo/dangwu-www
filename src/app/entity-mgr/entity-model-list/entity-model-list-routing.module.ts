import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntityModelListComponent} from './entity-model-list.component';

const routes: Routes = [
  {path: '', component: EntityModelListComponent},

  {path: 'listGenericCurd/:dataSourceName/:entityName', loadChildren: './list-generic-curd/list-generic-curd.module#ListGenericCurdModule'},
  {path: 'editEntityModel/:dataSourceName/:entityName', loadChildren: './edit-entity-model/edit-entity-model.module#EditEntityModelModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityModelListRoutingModule {
}
