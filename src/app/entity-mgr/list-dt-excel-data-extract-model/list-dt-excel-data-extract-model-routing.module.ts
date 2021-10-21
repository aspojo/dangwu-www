import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListDtExcelDataExtractModelComponent} from './list-dt-excel-data-extract-model.component';

const routes: Routes = [
    {path: '', component: ListDtExcelDataExtractModelComponent},
    {path: 'editDtExcelDataExtractModel/:formPK', loadChildren: './edit-dt-excel-data-extract-model/edit-dt-excel-data-extract-model.module#EditDtExcelDataExtractModelModule'},
    {path: 'viewDtExcelDataExtractModel/:formPK', loadChildren: './view-dt-excel-data-extract-model/view-dt-excel-data-extract-model.module#ViewDtExcelDataExtractModelModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDtExcelDataExtractModelRoutingModule {
}
