import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwEthnicComponent} from './edit-dw-ethnic.component';

const routes: Routes = [
  {path: '', component: EditDwEthnicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwEthnicRoutingModule {
}
