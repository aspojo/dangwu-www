import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwPhasesFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwPhases';
  }

  get queryEntityName() {
    return 'DwPhasesView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'id', showInQuery: 'Y', showInTable: 'Y', required: 'Y', isValueField: 'Y',},
      {fieldName: 'phasesNumber', fieldLabel: '党校期数', showInQuery: 'Y', showInTable: 'Y', showInEdit: 'Y', isShowField: 'Y', required: 'Y'},
      {fieldName: 'phasesStart', fieldLabel: '开始时间', fieldType: 'date', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', orderBy: '-'},
      {fieldName: 'phasesEnd', fieldLabel: '结束时间', fieldType: 'date', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', orderBy: '-'},
    ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


