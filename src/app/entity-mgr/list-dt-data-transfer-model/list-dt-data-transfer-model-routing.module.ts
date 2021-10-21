import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListDtDataTransferModelComponent} from './list-dt-data-transfer-model.component';

const routes: Routes = [
    {path: '', component: ListDtDataTransferModelComponent},
    {path: 'editDtDataTransferModel/:formPK', loadChildren: './edit-dt-data-transfer-model/edit-dt-data-transfer-model.module#EditDtDataTransferModelModule'},
    {path: 'viewDtDataTransferModel/:formPK', loadChildren: './view-dt-data-transfer-model/view-dt-data-transfer-model.module#ViewDtDataTransferModelModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDtDataTransferModelRoutingModule {
}
