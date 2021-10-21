import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwGeneralPartyComponent} from './list-dw-general-party.component';

const routes: Routes = [
    {path: '', component: ListDwGeneralPartyComponent},
    {path: 'editDwGeneralParty/:formPK', loadChildren: './edit-dw-general-party/edit-dw-general-party.module#EditDwGeneralPartyModule'},
    {path: 'viewDwGeneralParty/:formPK', loadChildren: './view-dw-general-party/view-dw-general-party.module#ViewDwGeneralPartyModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwGeneralPartyRoutingModule {
}
