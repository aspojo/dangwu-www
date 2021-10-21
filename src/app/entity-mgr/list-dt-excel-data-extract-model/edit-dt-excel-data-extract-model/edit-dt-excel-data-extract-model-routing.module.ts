import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditDtExcelDataExtractModelComponent} from './edit-dt-excel-data-extract-model.component';

const routes: Routes = [
  {path: '', component: EditDtExcelDataExtractModelComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDtExcelDataExtractModelRoutingModule {
}
