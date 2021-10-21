import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UseDirectiveComponent} from './use-directive.component';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UseDirectiveComponent}]),
    PageHeaderModule,
    HighlightJsModule,
    FormsModule,
    NgbModule,
    ConfirmModule,
    DownloadModule,
    SelectDeptModule,
    SelectUserModule,
  ],
  declarations: [UseDirectiveComponent],
  exports: [RouterModule]
})
export class UseDirectiveModule {
}

