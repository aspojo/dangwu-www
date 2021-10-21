import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DtDataTransferModelFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DtDataTransferModel';
  }

  get queryEntityName() {
    return 'DtDataTransferModelView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'transferId', PK: 'Y', fieldLabel: '传输模型id', required: 'Y', isValueField: 'Y', },
      {fieldName: 'name', fieldLabel: '模型名称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', isShowField: 'Y', },
      {
        fieldName: 'extractModelId', fieldLabel: '数据提取模型', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', component: 'complexSelect',
        relEntityName: 'DtExcelDataExtractModel',
      },
      {
        fieldName: 'saveDatasource', fieldLabel: '存储数据库', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', component: 'select',
        relEntityName: 'DatabaseSeq',
        relFieldName: 'dataSourceName', relFieldValue: 'description',
      },
      {fieldName: 'saveModelId', fieldLabel: '存储模型', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'description', fieldLabel: '描述', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'fieldMapping', fieldLabel: '字段对应', required: 'Y'},
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


