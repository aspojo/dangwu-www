import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DtExcelTemplateFileFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DtExcelTemplateFile';
  }

  get queryEntityName() {
    return 'DtExcelTemplateFileView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'templateId', PK: 'Y', required: 'Y', isValueField: 'Y', },
      {fieldName: 'name', fieldLabel: '模板名称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', isShowField: 'Y', required: 'Y'},
      {fieldName: 'description', fieldLabel: '模板备注', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'userLoginId', fieldLabel: '模板上传人', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', defaultValue: '$currentUser', },
      {fieldName: 'filePath', fieldLabel: '模板路径', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'createdTime', fieldLabel: '创建时间', fieldType: 'dateTime', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', defaultValue: '$currentDatetime', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


