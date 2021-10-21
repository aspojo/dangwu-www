import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CodeToolComponent} from './code-tool.component';

const routes: Routes = [
  {path: '', component: CodeToolComponent},
  {path: 'entityList/:entityName', loadChildren: './entity-list/entity-list.module#EntityListModule'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeToolRoutingModule {
}
