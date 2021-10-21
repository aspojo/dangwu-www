import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SortablejsModule} from 'ngx-sortablejs';
import {ConfirmModule} from '@shared-modules/confirm';
import {PageHeaderModule} from '@shared-modules/page-header';
import {SharedPipesModule} from '@shared-pipes';
import {ImportDataComponent} from './import-data.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
    NgbModule,
    SortablejsModule,
    FormsModule,
    SharedPipesModule,
    FileUploadModule,
  ],
  exports: [
    ImportDataComponent
  ],
  declarations: [ImportDataComponent]
})
export class ImportDataModule {
}
