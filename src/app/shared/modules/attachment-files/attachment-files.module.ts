import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AttachmentFilesComponent} from './attachment-files.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DownloadModule} from '../download/download.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, RouterModule, FileUploadModule, FormsModule, ReactiveFormsModule,  DownloadModule, NgbModule],
  declarations: [AttachmentFilesComponent],
  exports: [AttachmentFilesComponent]
})
export class AttachmentFilesModule {
}
