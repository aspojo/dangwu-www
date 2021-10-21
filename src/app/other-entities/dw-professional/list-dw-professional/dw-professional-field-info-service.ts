import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwProfessionalFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwProfessional';
  }

  get queryEntityName() {
    return 'DwProfessionalView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: '专业id', showInQuery: 'Y', required: 'Y', isValueField: 'Y',},
      {fieldName: 'professionalName', fieldLabel: '专业名称', showInQuery: 'Y', required: 'Y', isShowField: 'Y',},
      {
        fieldName: 'generalId', fieldLabel: '所属党委', showInQuery: 'Y', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwGeneralParty',
      },
      {fieldName: 'generalIdValue', fieldLabel: '所属党委', showInTable: 'Y', showInView: 'Y',},
      {fieldName: 'professionalHistory', fieldLabel: '是否历史', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y',},
    ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


