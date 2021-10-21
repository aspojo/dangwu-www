import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditDtDataTransferHistoryComponent} from './edit-dt-data-transfer-history.component';

const routes: Routes = [
  {path: '', component: EditDtDataTransferHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDtDataTransferHistoryRoutingModule {
}
