import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditDtDataTransferModelComponent} from './edit-dt-data-transfer-model.component';

const routes: Routes = [
  {path: '', component: EditDtDataTransferModelComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDtDataTransferModelRoutingModule {
}
