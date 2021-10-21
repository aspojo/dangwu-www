import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwRelationshipComponent} from './view-dw-relationship.component';

const routes: Routes = [
  {path: '', component: ViewDwRelationshipComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwRelationshipRoutingModule {
}
