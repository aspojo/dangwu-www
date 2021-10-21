import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListDtExcelTemplateFileComponent} from './list-dt-excel-template-file.component';

const routes: Routes = [
    {path: '', component: ListDtExcelTemplateFileComponent},
    {path: 'editDtExcelTemplateFile/:formPK', loadChildren: './edit-dt-excel-template-file/edit-dt-excel-template-file.module#EditDtExcelTemplateFileModule'},
    {path: 'viewDtExcelTemplateFile/:formPK', loadChildren: './view-dt-excel-template-file/view-dt-excel-template-file.module#ViewDtExcelTemplateFileModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDtExcelTemplateFileRoutingModule {
}
