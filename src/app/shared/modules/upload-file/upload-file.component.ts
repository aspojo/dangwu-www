import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {environment} from '@environments';
import {FileUploader} from 'ng2-file-upload';
import {ParsedResponseHeaders} from 'ng2-file-upload/file-upload/file-uploader.class';
import {FileItem} from 'ng2-file-upload/file-upload/file-item.class';
import {CommonFormInput} from '@shared-common/form-input';
import {HttpClient} from '@angular/common/http';
import {Auth} from '@shared-services/auth';
import {UtilHttp} from '@shared-utils/http';

@Component({
  selector: 'app-upload-file',
  template: `
    <span *ngIf="fileName">{{fileName}}&nbsp;<i class="text-danger" style="cursor: pointer;" (click)="removeFile()">&times;</i>&nbsp;</span>
    <button class="btn btn-xsm btn-outline-primary" (click)="fileInput.click()">
      <input type="file" #fileInput ng2FileSelect [uploader]="uploader" [accept]="accept" hidden>
      <i class="fa fa-fw fa-upload"></i>上传文件
    </button>
  `, providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: UploadFileComponent, multi: true}
  ],
})
export class UploadFileComponent extends CommonFormInput<any> implements OnInit {
  public uploader: FileUploader = new FileUploader({url: environment.serverUrl + 'uploadFile' + ';jsessionid=' + Auth.userData.jsessionid, autoUpload: true});
  @ViewChild('fileInput', {static: false}) fileInput;
  @Input() accept: string;
  @Output() fileRemoveEvent = new EventEmitter<any>(); // 文件删除事件

  constructor(public http: HttpClient) {
    super();
  }

  ngOnInit() {
    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.value = JSON.parse(response).filePath;
      this.fileInput.nativeElement.value = null;
    };
  }

  get fileName() {
    if (this.value) {
      const arr = this.value.split('.');
      const arr2 = this.value.split('/');
      return arr2[arr2.length - 1];
    }
    return '';
  }

  removeFile() {
    this.http.post('removeFile', {filePath: this.value}).subscribe((data) => {
      if (UtilHttp.notHasError(data)) {
        this.value = '';
        this.fileRemoveEvent.emit();
      }
    });
  }
}
