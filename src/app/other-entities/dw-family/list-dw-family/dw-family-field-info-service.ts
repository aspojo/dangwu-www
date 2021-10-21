import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwFamilyFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwFamily';
  }

  get queryEntityName() {
    return 'DwFamilyView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'ID', required: 'Y', isValueField: 'Y', },
      {fieldName: 'title', fieldLabel: '称谓', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'name', fieldLabel: '姓名', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'birthday', fieldLabel: '出生年月', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'political', fieldLabel: '政治面貌', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'workunits', fieldLabel: '工作单位及职务', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'age', fieldLabel: '年龄', },
      {fieldName: 'pertymember', fieldLabel: '人员', },
      {fieldName: 'pertymemberValue', fieldLabel: '人员', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


