import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UploadFileComponent} from './upload-file.component';
import {FileUploadModule} from 'ng2-file-upload';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FileUploadModule
  ],
  declarations: [UploadFileComponent],
  exports: [UploadFileComponent]
})
export class UploadFileModule {
}
