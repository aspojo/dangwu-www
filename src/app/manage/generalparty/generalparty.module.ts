import {NgModule} from '@angular/core';
import {GeneralpartyComponent} from './generalparty-component';
import {ListDwGeneralPartyModule} from './list-dw-general-party/list-dw-general-party.module';
import {GeneralpartyRoutingModule} from './generalparty-routing.module';

@NgModule({
  imports: [
    GeneralpartyRoutingModule,
    ListDwGeneralPartyModule,

  ],
  declarations: [GeneralpartyComponent],
  exports: [GeneralpartyComponent],
  providers: []
})
export class GeneralpartyModule {
}
