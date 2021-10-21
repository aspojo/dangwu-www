import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwRelationshipFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwRelationship';
  }

  get queryEntityName() {
    return 'DwRelationshipView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'id', required: 'Y', isValueField: 'Y', },
      {fieldName: 'grassroot', fieldLabel: '转入基层党组织', required: 'Y', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'payableto', fieldLabel: '组织关系抬头称谓', required: 'Y', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'pertymembernumber', fieldLabel: '介绍信编号', required: 'Y', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'membership', fieldLabel: '党费缴至时间', required: 'Y', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'dirtime', fieldLabel: '转出时间', required: 'Y', fieldType: 'date', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'contact', fieldLabel: '联系方式', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'pertymember', fieldLabel: '所属党员', required: 'Y', },
      {fieldName: 'pertymemberValue', fieldLabel: '所属党员', showInTable: 'Y', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


