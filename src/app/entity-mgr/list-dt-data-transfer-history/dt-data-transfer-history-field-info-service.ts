import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DtDataTransferHistoryFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DtDataTransferHistory';
  }

  get queryEntityName() {
    return 'DtDataTransferHistoryView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'historyId', PK: 'Y', fieldLabel: '历史id', required: 'Y', },
      {fieldName: 'userLoginId', fieldLabel: '操作人', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', component: 'selectUser', defaultValue: '$currentUser', },
      {fieldName: 'operateTime', fieldLabel: '操作时间', fieldType: 'dateTime', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', defaultValue: '$currentDatetime', orderBy: '-'},
      {fieldName: 'filePath', fieldLabel: '文件', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'description', fieldLabel: '操作描述', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', component: 'text', },
      {fieldName: 'influenceDomain', fieldLabel: '数据传输模型', required: 'Y', showInEdit: 'Y'},
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


