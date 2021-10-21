import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'listDtExcelTemplateFile', loadChildren: './list-dt-excel-template-file/list-dt-excel-template-file.module#ListDtExcelTemplateFileModule'},
  {path: 'listDtExcelDataExtractModel', loadChildren: './list-dt-excel-data-extract-model/list-dt-excel-data-extract-model.module#ListDtExcelDataExtractModelModule'},
  {path: 'listDtDataTransferModel', loadChildren: './list-dt-data-transfer-model/list-dt-data-transfer-model.module#ListDtDataTransferModelModule'},
  {path: 'listDtDataTransferHistory', loadChildren: './list-dt-data-transfer-history/list-dt-data-transfer-history.module#ListDtDataTransferHistoryModule'},
  {path: 'entityModelList/:dataSourceName', loadChildren: './entity-model-list/entity-model-list.module#EntityModelListModule'},
  {path: 'listDataSource', loadChildren: './list-data-source/list-data-source.module#ListDataSourceModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityMgrRoutingModule {
}
