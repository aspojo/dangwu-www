import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FieldSetComponent} from './fieldSet.component';

const routes: Routes = [
  {path: '', component: FieldSetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldSetRoutingModule {
}
