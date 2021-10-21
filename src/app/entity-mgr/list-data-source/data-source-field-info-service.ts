import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DataSourceFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DatabaseSeq';
  }

  get queryEntityName() {
    return 'DatabaseSeq';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'dataSourceName', PK: 'Y', fieldLabel: '数据源', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', required: 'Y', },
      {fieldName: 'description', fieldLabel: '数据源描述', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {
        fieldName: 'fieldTypeName', fieldLabel: '数据库类型', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', component: 'select', 
        dicId: 'databaseType',
      },
      {fieldName: 'schemaName', fieldLabel: '模式名', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'databaseName', fieldLabel: '数据库名', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'ip', fieldLabel: 'ip', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'port', fieldLabel: '端口', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'jdbcUsername', fieldLabel: '账号', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'jdbcPassword', fieldLabel: '密码', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'isShow', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


