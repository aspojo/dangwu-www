import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwGeneralPartyFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwGeneralParty';
  }

  get queryEntityName() {
    return 'DwGeneralPartyView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'generalPartyNumber', fieldLabel: '党支部编号', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', orderBy: '+'},
      {fieldName: 'id', PK: 'Y', fieldLabel: '党支部id', showInView: 'Y', required: 'Y', isValueField: 'Y', orderBy: '+',},
      {fieldName: 'generalPartyName', fieldLabel: '党委名称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', isShowField: 'Y',},
      {
        fieldName: 'parentId', fieldLabel: '父党委', showInQuery: 'Y', showInTable: 'N',  showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwGeneralParty',
      },
      {fieldName: 'parentIdValue', fieldLabel: '父党委', showInTable: 'N', showInView: 'N',},
      {
        fieldName: 'generalPartyHistory', fieldLabel: '是否历史', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', component: 'select',
        dicId: 'Dw_Y/N',
      },
      {
        fieldName: 'cadres', fieldLabel: '干部', showInEdit: 'N', component: 'select',
        dicId: 'Dw_Y/N',
      },
      {fieldName: 'orderNum', fieldLabel: '排序', showInEdit: 'N', required: 'N',},
      {fieldName: 'generalPartyHistoryValue', fieldLabel: '是否历史',},
      {fieldName: 'cadresValue', fieldLabel: '干部',},
    ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


