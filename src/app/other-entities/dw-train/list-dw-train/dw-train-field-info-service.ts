import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwTrainFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwTrain';
  }

  get queryEntityName() {
    return 'DwTrainView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'id', showInQuery: 'Y', required: 'Y', isValueField: 'Y', },
      {fieldName: 'trainClassName', fieldLabel: '培训班名称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'management', fieldLabel: '承办机构', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'sponsor', fieldLabel: '主办单位', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'trainPlace', fieldLabel: '培训地点', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'startTime', fieldLabel: '开始时间', fieldType: 'date', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
      {fieldName: 'endTime', fieldLabel: '结束时间', fieldType: 'date', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
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


