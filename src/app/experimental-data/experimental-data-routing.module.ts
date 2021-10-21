import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'listGenericCurd/:dataSourceName/:entityName/:asApplication', loadChildren: '../entity-mgr/entity-model-list/list-generic-curd/list-generic-curd.module#ListGenericCurdModule'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperimentalDataRoutingModule {
}
