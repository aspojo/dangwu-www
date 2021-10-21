import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '@environments';
import {Auth} from '@shared-services/auth';
import {MessageService} from '@shared-services/message';
import {UtilHttp} from '@shared-utils/http';
import {UtilValidate} from '@shared-utils/validate';
import {FileItem, FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';
import {LoadingService} from '@shared-services/loading';

@Component({
  selector: '[importData]',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css'],
})
export class ImportDataComponent implements OnInit {
  @Input() importData;
  @Input() dataSourceName;
  defaultXmlTxt = `<entity-engine-xml>
</entity-engine-xml>`;
  xmlTxt = this.defaultXmlTxt;
  public uploader: FileUploader;
  loadingRef;


  @ViewChild('modalView', {static: false}) modalView: TemplateRef<any>;
  modalRef: NgbModalRef;

  constructor(
    private http: HttpClient,
    private el: ElementRef,
    private modalService: NgbModal,
    private loadingService: LoadingService,
  ) {
    const element: HTMLElement = this.el.nativeElement;
    element.addEventListener('click', (event) => {
      this.modalRef = this.modalService.open(this.modalView, {size: 'lg'});
    });

  }

  ngOnInit(): void {
    this.uploader = new FileUploader({
      url: environment.serverUrl + 'importXmlData;jsessionid=' + Auth.userData.jsessionid,
      autoUpload: true,
      additionalParameter: {dataSourceName: this.dataSourceName}
    });
    this.uploader.onBeforeUploadItem = () => {
      this.loadingRef = this.loadingService.open();
    };
    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.loadingRef.close();
      this.afterImported(JSON.parse(response));
    };
  }


  importXmlTxtData() {
    if (UtilValidate.isEmpty(this.xmlTxt) || this.xmlTxt === this.defaultXmlTxt) {
      MessageService.showGlobalMessage('danger', '请填写数据');
      return;
    }
    this.http.post('importXmlTxtData', {dataSourceName: this.dataSourceName, xmlTxt: this.xmlTxt}).subscribe(data => {
      this.afterImported(data);
    });
  }

  afterImported(data: any) {
    if (data.changedNum != null) {
      MessageService.showGlobalMessage('success', '导入数据：' + data.changedNum + '条');
    } else if (UtilHttp.notHasError(data)) {
      MessageService.showGlobalMessage('success', '导入成功');
    }
    this.modalRef.close();
  }

}
