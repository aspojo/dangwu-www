import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwResumeFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwResume';
  }

  get queryEntityName() {
    return 'DwResumeView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: '简历id', showInQuery: 'Y', required: 'Y', isValueField: 'Y', },
      {fieldName: 'caption', fieldLabel: '简历描述', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'remark', fieldLabel: '备注', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'pertymember', fieldLabel: '所属党员', showInQuery: 'Y', showInEdit: 'Y', },
      {fieldName: 'pertymemberValue', fieldLabel: '姓名', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


