import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditDtExcelTemplateFileComponent} from './edit-dt-excel-template-file.component';

const routes: Routes = [
  {path: '', component: EditDtExcelTemplateFileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDtExcelTemplateFileRoutingModule {
}
