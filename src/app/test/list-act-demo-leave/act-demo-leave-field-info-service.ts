import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class ActDemoLeaveFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'ActDemoLeave';
  }

  get queryEntityName() {
    return 'ActDemoLeaveView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'leaveId', PK: 'Y', },
      {fieldName: 'userLoginId', fieldLabel: '请假人', showInTable: 'Y', showInView: 'Y', required: 'Y', defaultValue: '$currentUser', },
      {fieldName: 'reason', fieldLabel: '请假说明', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', component: 'text', },
      {fieldName: 'startDate', fieldLabel: '开始日期', fieldType: 'date', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'endDate', fieldLabel: '结束日期', fieldType: 'date', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


