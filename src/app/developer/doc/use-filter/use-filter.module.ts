import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UseFilterComponent} from './use-filter.component';
import {RouterModule} from '@angular/router';
import {HighlightJsModule} from 'ngx-highlight-js';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ImageViewModule} from '../../../shared/modules/image-view/image-view.module';
import {UploadImageModule} from '../../../shared/modules/upload-image/upload-image.module';
import {DownloadModule} from '../../../shared/modules/download/download.module';
import {SelectUserModule} from '@shared-modules/select-user';
import {ConfirmModule} from '@shared-modules/confirm';
import {SelectDeptModule} from '@shared-modules/select-dept';
import {PageHeaderModule} from '@shared-modules/page-header';
import {SharedPipesModule} from '@shared-pipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UseFilterComponent}]),
    PageHeaderModule,
    HighlightJsModule,
    FormsModule,
    NgbModule,
    ConfirmModule,
    DownloadModule,
    SelectDeptModule,
    SelectUserModule,
    SharedPipesModule,
  ],
  declarations: [UseFilterComponent],
  exports: [RouterModule]
})
export class UseFilterModule {
}

