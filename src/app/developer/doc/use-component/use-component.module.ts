import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UseComponentComponent} from './use-component.component';
import {RouterModule} from '@angular/router';
import {CommonSelectModule} from '@shared-modules/select';
import {PageHeaderModule} from '@shared-modules/page-header';
import {HighlightJsModule} from 'ngx-highlight-js';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonTypeTreeModule} from '@shared-modules/type-tree';
import {UploadImageModule} from '@shared-modules/upload-image';
import {RegionSelectModule} from '@shared-modules/region-select';
import {UploadFileModule} from '@shared-modules/upload-file';
import {ImageViewModule} from '@shared-modules/image-view';
import {TrueFalseSelectModule} from '@shared-modules/true-false-select';
import {ScanInputModule} from '@shared-modules/scan-input';
import {DicSelectModule} from '@shared-modules/dic-select';
import {DateInputModule, DateTimeInputModule, RichTextInputModule} from '@shared-modules/input';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UseComponentComponent}]),
    PageHeaderModule,
    HighlightJsModule,
    FormsModule,
    NgbModule,
    CommonSelectModule,
    CommonTypeTreeModule,
    ImageViewModule,
    RegionSelectModule,
    TrueFalseSelectModule,
    UploadFileModule,
    UploadImageModule,
    ScanInputModule,
    DicSelectModule,
    DateInputModule,
    DateTimeInputModule,
    RichTextInputModule,
    PageHeaderModule,
  ],
  declarations: [UseComponentComponent],
  exports: [RouterModule]
})
export class UseComponentModule {
}

