import {Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Auth} from '@shared-services/auth';
import {MessageService} from '@shared-services/message';

@Component({
  selector: '[fieldSettings]',
  templateUrl: './field-settings.component.html',
  styleUrls: ['./field-settings.component.css'],
})
export class FieldSettingsComponent {
  @Input() fieldSettings;
  @Input() dataSourceName;
  @Input() entityName;
  oldFieldInfo: Array<any>;
  @Input() fieldInfo: Array<any>;
  @Output() dataSavedEvent = new EventEmitter<any>(); // 任务处理完成事件
  newDataList;
  showSortInfo: boolean;

  @ViewChild('modalView', {static: false}) modalView: TemplateRef<any>;
  modalRef: NgbModalRef;

  constructor(
    private http: HttpClient,
    private el: ElementRef,
    private modalService: NgbModal
  ) {
    const element: HTMLElement = this.el.nativeElement;
    element.addEventListener('click', (event) => {
      this.modalRef = this.modalService.open(this.modalView, {size: 'lg'});
      if (this.oldFieldInfo) {
        this.fieldInfo = this.oldFieldInfo;
      } else {
        this.oldFieldInfo = this.fieldInfo;
        this.fieldInfo = this.fieldInfo.map(value => Object.assign({}, value));
      }

    });
  }


  sortClick() {
    this.showSortInfo = true;
    this.newDataList = [];
    this.syncSort(this.fieldInfo, this.newDataList);
  }

  hideSortInfo() {
    this.showSortInfo = false;
  }


  saveDeptSortClick() {
    this.newDataList.forEach((item, index) => {
      item.orderNum = (100 + index) + '';
    });
    this.hideSortInfo();
    this.syncSort(this.newDataList, this.fieldInfo);
  }

  saveData() {
    this.http.post('genericSave', {
      entityName: 'UserEntityFieldInfo',
      fieldMap: {dataSourceName: this.dataSourceName, entityName: this.entityName, userLoginId: Auth.userData.userLoginId, fieldList: this.fieldInfo},
    }).subscribe(data => {
      if (data['error'] == null) {
        MessageService.showGlobalMessage('success', '保存成功！');
        this.modalRef.close();
        this.dataSavedEvent.emit(this.fieldInfo);
      }
    });
  }


  cancelDeptSortClick() {
    this.hideSortInfo();
  }

  syncSort(sourceList, targetList) {
    // 同步排序
    for (let i = 0; i < sourceList.length; i++) {
      targetList[i] = sourceList[i];
    }
  }

  editAll(param2: any) {
    if (this.checkedNum > 0) {
      this.fieldInfo.forEach(field => {
          if (field.checked) {
            Object.assign(field, param2);
          }
        }
      );
    } else {
      MessageService.showGlobalMessage('danger', '请选择');
    }
  }

  // +++++++++++++++++++++++++++++++选择表数据开始++++++++++++++++++

  // 全选
  checkAll() {
    const b = !this.isAllChecked;
    this.fieldInfo.forEach((item: any) => {
      item.checked = b;
    });
  }

  // 是否全选
  get isAllChecked() {
    return (this.fieldInfo != null) && (this.fieldInfo.length > 0) && (this.checkedNum === this.fieldInfo.length);
  }

  // 选中数目
  get checkedNum() {
    let checkedNum = 0;
    if (this.fieldInfo) {
      this.fieldInfo.forEach((item: any) => {
        checkedNum += (item.checked ? 1 : 0);
      });
    }
    // this.isAllChecked = (this.checkedNum === this.peopleList.length);
    return checkedNum;
  }

}
