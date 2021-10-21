import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewDtExcelTemplateFileComponent} from './view-dt-excel-template-file.component';

const routes: Routes = [
  {path: '', component: ViewDtExcelTemplateFileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDtExcelTemplateFileRoutingModule {
}
