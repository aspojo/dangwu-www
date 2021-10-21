import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewDtDataTransferModelComponent} from './view-dt-data-transfer-model.component';

const routes: Routes = [
  {path: '', component: ViewDtDataTransferModelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDtDataTransferModelRoutingModule {
}
