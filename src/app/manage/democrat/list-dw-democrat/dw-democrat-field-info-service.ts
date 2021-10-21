import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwDemocratFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwDemocrat';
  }

  get queryEntityName() {
    return 'DwDemocratView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'democratNumber', fieldLabel: '民主党派编号', showInView: 'Y', showInEdit: 'Y', orderBy: '+'},
      {fieldName: 'id', PK: 'Y', fieldLabel: 'ID', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', isValueField: 'Y', orderBy: '+'},
      {fieldName: 'democratName', fieldLabel: '民主党派名称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', isShowField: 'Y', },
      {fieldName: 'parentId', fieldLabel: '父节点', },
      {fieldName: 'parentIdValue', fieldLabel: '民主党派', },
      {fieldName: 'democratAname', fieldLabel: '所属党派名', showInEdit: 'Y', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


