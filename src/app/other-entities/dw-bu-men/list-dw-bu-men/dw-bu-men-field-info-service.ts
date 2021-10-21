import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwBuMenFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwBuMen';
  }

  get queryEntityName() {
    return 'DwBuMenView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: '部门id', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', required: 'Y', isValueField: 'Y', },
      {fieldName: 'name', fieldLabel: '部门名称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', isShowField: 'Y', },
      {fieldName: 'sort', fieldLabel: '部门排序', orderBy: '+', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


