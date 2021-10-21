import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewDwGeneralPartyComponent} from './view-dw-general-party.component';

const routes: Routes = [
  {path: '', component: ViewDwGeneralPartyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDwGeneralPartyRoutingModule {
}
