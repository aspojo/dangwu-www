import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditDwGeneralPartyComponent} from './edit-dw-general-party.component';

const routes: Routes = [
  {path: '', component: EditDwGeneralPartyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDwGeneralPartyRoutingModule {
}
