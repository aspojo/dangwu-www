import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewDtDataTransferHistoryComponent} from './view-dt-data-transfer-history.component';

const routes: Routes = [
  {path: '', component: ViewDtDataTransferHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDtDataTransferHistoryRoutingModule {
}
