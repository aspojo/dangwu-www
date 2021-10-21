import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwGenderFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwGender';
  }

  get queryEntityName() {
    return 'DwGenderView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'id', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', required: 'Y', },
      {fieldName: 'genderName', fieldLabel: '性别', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


