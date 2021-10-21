import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListDtDataTransferHistoryComponent} from './list-dt-data-transfer-history.component';

const routes: Routes = [
    {path: '', component: ListDtDataTransferHistoryComponent},
    {path: 'editDtDataTransferHistory/:formPK', loadChildren: './edit-dt-data-transfer-history/edit-dt-data-transfer-history.module#EditDtDataTransferHistoryModule'},
    {path: 'viewDtDataTransferHistory/:formPK', loadChildren: './view-dt-data-transfer-history/view-dt-data-transfer-history.module#ViewDtDataTransferHistoryModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDtDataTransferHistoryRoutingModule {
}
