import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditEntityModelComponent} from './edit-entity-model.component';

const routes: Routes = [
  {path: '', component: EditEntityModelComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditEntityModelRoutingModule {
}
