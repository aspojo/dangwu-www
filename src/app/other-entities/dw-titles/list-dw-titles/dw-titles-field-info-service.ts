import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwTitlesFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwTitles';
  }

  get queryEntityName() {
    return 'DwTitlesView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'id', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', required: 'Y', isValueField: 'Y', },
      {fieldName: 'titlesName', fieldLabel: '职称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', isShowField: 'Y', },
      {fieldName: 'titlesSort', fieldLabel: '排序', showInEdit: 'Y', orderBy: '+', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


