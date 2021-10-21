import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditGenericCurdComponent} from './edit-generic-curd.component';

const routes: Routes = [
  {path: '', component: EditGenericCurdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditGenericCurdRoutingModule {
}
