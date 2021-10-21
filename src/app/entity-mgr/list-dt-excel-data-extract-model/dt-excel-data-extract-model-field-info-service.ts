import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DtExcelDataExtractModelFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DtExcelDataExtractModel';
  }

  get queryEntityName() {
    return 'DtExcelDataExtractModelView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'extractModelId', PK: 'Y', fieldLabel: '提取模型id', required: 'Y', isValueField: 'Y'},
      {fieldName: 'name', fieldLabel: '模型名称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', isShowField: 'Y'},
      {
        fieldName: 'modelType', fieldLabel: '模型类型', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', component: 'select',
        dicId: 'dtExcelExtractType',
      },
      {
        fieldName: 'templateId', fieldLabel: '模板文件', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', component: 'complexSelect',
        relEntityName: 'DtExcelTemplateFile',
      },
      {fieldName: 'userLoginId', fieldLabel: '创建人', showInTable: 'Y', showInView: 'Y', defaultValue: '$currentUser', },
      {fieldName: 'createdTime', fieldLabel: '创建时间', fieldType: 'dateTime', showInTable: 'Y', showInView: 'Y', defaultValue: '$currentDatetime', },
      {fieldName: 'description', fieldLabel: '模型备注', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', component: 'text', },
      {fieldName: 'fieldColInfo', fieldLabel: '字段单元格配置', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


