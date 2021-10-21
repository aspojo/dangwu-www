import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EntityFieldValidate} from '@shared-utils/entity';
import {EnvironmentService} from '@shared-services/environment';
import {MessageService} from '@shared-services/message';
import {UtilValidate} from '@shared-utils/validate';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {DtDataTransferHistoryFieldInfoService} from '../dt-data-transfer-history-field-info-service';
import {DtDataTransferHistoryService} from '../dt-data-transfer-history-service';
import {Observable} from 'rxjs';
import {DtDataTransferModelFieldInfoService} from '../../list-dt-data-transfer-model/dt-data-transfer-model-field-info-service';

@Component({
  selector: 'app-edit-dt-data-transfer-history',
  templateUrl: './edit-dt-data-transfer-history.component.html',
  styleUrls: ['./edit-dt-data-transfer-history.component.scss'],
})
export class EditDtDataTransferHistoryComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: DtDataTransferHistoryService,
    public fieldInfoService: DtDataTransferHistoryFieldInfoService,
    public tmFieldInfoService: DtDataTransferModelFieldInfoService,
  ) {
    super();
  }

  afterInit() {
    if (this.inCreate) {
      this.editDataTemp.influenceDomain = [];
    }
  }

  fileRemove() {
    MessageService.showGlobalMessage('warning', '删除成功，请重新上传文件。');
  }

  addRow() {
    this.editDataTemp.influenceDomain.push({});
  }

  removeRow(item: any) {
    this.editDataTemp.influenceDomain = this.editDataTemp.influenceDomain.filter((value => item !== value));
  }

  beforeSubmit(validate: EntityFieldValidate) {
    this.editDataTemp.influenceDomain.forEach((item: any) => {
      if (UtilValidate.isEmpty(item.transferId)) {
        validate.addError('数据抽取模型不可为空');
      }
      if (UtilValidate.isEmpty(item.saveMode)) {
        validate.addError('数据写入方式不可为空');
      }
      item.defaultFieldMap = {};
      item.defaultFieldList.forEach(fieldInfo => {
        item.defaultFieldMap[fieldInfo.fieldName] = fieldInfo.defaultValue;
      });
    });
  }

  commitToServer(): Observable<object> {
    return new Observable(subscriber => {
      this.fieldInfoService.http.post('excelDataTransfer', {fieldMap: this.editDataTemp}).subscribe(data => {
        subscriber.next({});
      });
    });
  }

  transferModelSelected($event: Array<any> | any, item) {
    item.transferName = $event.name;
    this.tmFieldInfoService.getOne({entityName: this.tmFieldInfoService.entityName, PK: this.tmFieldInfoService.getEntityPK($event)}).subscribe(data => {
      const tempArr = [];
      Object.keys(data.fieldMapping).forEach(fieldName => {
        const mappingItem = data.fieldMapping[fieldName];
        if (UtilValidate.isEmpty(mappingItem.extractField)) {
          tempArr.push(Object.assign({fieldName}, mappingItem));
        }
      });
      if (tempArr) {
        item.defaultFieldList = tempArr;
      }
    });
  }
}
