import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonFormInput} from '../../common/common-form-input';
import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '@environments';
import {FileUploader} from 'ng2-file-upload';
import {ParsedResponseHeaders} from 'ng2-file-upload/file-upload/file-uploader.class';
import {FileItem} from 'ng2-file-upload/file-upload/file-item.class';
import {Auth} from '@shared-services/auth';

@Component({
  selector: 'app-upload-image',
  template: `
    <app-image-view [appImageView]="value" [imgStyle]="'common-image-upload-size'"></app-image-view>
    <button class="btn btn-xsm btn-outline-primary" (click)="fileInput.click()">
      <input type="file" #fileInput ng2FileSelect [uploader]="uploader" hidden>
      <i class="fa fa-fw fa-upload"></i>上传图片
    </button>
  `, providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: UploadImageComponent, multi: true}
  ],
})
export class UploadImageComponent extends CommonFormInput<any> implements OnInit {
  public uploader: FileUploader = new FileUploader({url: environment.serverUrl + 'uploadFile?type=image' + ';jsessionid=' + Auth.userData.jsessionid, autoUpload: true});
  @ViewChild('fileInput', {static: false}) fileInput;

  constructor() {
    super();
  }

  ngOnInit() {
    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.value = JSON.parse(response).filePath;
      this.fileInput.nativeElement.value = null;
    };
  }

}
