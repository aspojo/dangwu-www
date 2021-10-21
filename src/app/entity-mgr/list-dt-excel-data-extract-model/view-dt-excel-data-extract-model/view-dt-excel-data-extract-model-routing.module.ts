import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewDtExcelDataExtractModelComponent} from './view-dt-excel-data-extract-model.component';

const routes: Routes = [
  {path: '', component: ViewDtExcelDataExtractModelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDtExcelDataExtractModelRoutingModule {
}
