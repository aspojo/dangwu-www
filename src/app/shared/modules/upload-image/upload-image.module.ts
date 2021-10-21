import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UploadImageComponent} from './upload-image.component';
import {FileUploadModule} from 'ng2-file-upload';
import {ImageViewModule} from '../image-view/image-view.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FileUploadModule,
    ImageViewModule
  ],
  declarations: [UploadImageComponent],
  exports: [UploadImageComponent]
})
export class UploadImageModule {
}
