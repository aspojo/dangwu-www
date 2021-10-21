import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditDataSourceComponent} from './edit-data-source.component';

const routes: Routes = [
  {path: '', component: EditDataSourceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDataSourceRoutingModule {
}
