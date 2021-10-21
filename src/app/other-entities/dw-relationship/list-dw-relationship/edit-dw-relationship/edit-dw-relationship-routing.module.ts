import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwRelationshipComponent} from './edit-dw-relationship.component';

const routes: Routes = [
  {path: '', component: EditDwRelationshipComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwRelationshipRoutingModule {
}
