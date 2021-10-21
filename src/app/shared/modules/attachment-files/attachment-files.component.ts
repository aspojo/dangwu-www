import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '@environments';
import {FileItem} from 'ng2-file-upload/file-upload/file-item.class';
import {ParsedResponseHeaders} from 'ng2-file-upload/file-upload/file-uploader.class';
import {HttpClient} from '@angular/common/http';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Auth} from '@shared-services/auth';

@Component({
  selector: 'app-attachment-files',
  templateUrl: './attachment-files.component.html',
  styleUrls: ['./attachment-files.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: AttachmentFilesComponent, multi: true}
  ]
})
export class AttachmentFilesComponent<T> implements ControlValueAccessor, OnInit {
  @Input() inEdit = true;
  private innerValue: Array<T>;
  private changed = new Array<(value: Array<T>) => void>();
  private touched = new Array<() => void>();

  public uploader: FileUploader = new FileUploader({url: environment.serverUrl + 'uploadFile' + ';jsessionid=' + Auth.userData.jsessionid, autoUpload: true});

  @ViewChild('fileInput', {static: false}) fileInput;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.value = [].concat(this.innerValue, [JSON.parse(response)]);
      this.fileInput.nativeElement.value = null;
    };
  }

  deleteData(i) {
    this.http.post('removeFile', this.innerValue[i]).subscribe((data: any) => {
      if (!data.error) {
        this.innerValue.splice(i, 1);
        this.value = [].concat(this.innerValue);
        this.fileInput.nativeElement.value = null;
      }
    });

  }

  get value(): Array<T> {
    return this.innerValue;
  }

  set value(value: Array<T>) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }

  writeValue(value: Array<T>) {
    if (!value) {
      value = [];
    }
    this.innerValue = value;
  }


  registerOnChange(fn: (value: Array<T>) => void) {
    this.changed.push(fn);
  }


  registerOnTouched(fn: () => void) {
    this.touched.push(fn);
  }

  // 将文件大小B变为K和M
  formatFileSize(fileSize: number) {
    if (fileSize < 1024) {
      return fileSize + 'B';
    } else if (1024 <= fileSize &&  fileSize < 1048576) {
      return (fileSize / 1024).toFixed(2) + 'K';
    } else {
      return (fileSize / 1048576).toFixed(2) + 'M';
    }
  }
}
