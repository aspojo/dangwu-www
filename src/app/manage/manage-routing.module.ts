import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {path: 'generalparty', loadChildren: './generalparty/generalparty.module#GeneralpartyModule'},
  // {path: 'generalparty', loadChildren: './generalparty/list-dw-general-party/list-dw-general-party.module#ListDwGeneralPartyModule'},
  {path: 'phases', loadChildren: './phases/list-dw-phases/list-dw-phases.module#ListDwPhasesModule'},
  {path: 'professional', loadChildren: './professional/professional.module#ProfessionalModule'},
  {path: 'democrat', loadChildren: './democrat/list-dw-democrat/list-dw-democrat.module#ListDwDemocratModule'},
  {path: 'fieldSet', loadChildren: './fieldSet/fieldSet.module#FieldSetModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {
}
