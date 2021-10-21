import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DwRapFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwRap';
  }

  get queryEntityName() {
    return 'DwRapView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: '奖惩记录id', required: 'Y', },
      {fieldName: 'assessmentType', fieldLabel: '奖惩类型', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'office', fieldLabel: '批准机关', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'approveNumber', fieldLabel: '批准文号', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'approveTime', fieldLabel: '批准时间', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'caption', fieldLabel: '奖惩名称', showInTable: 'Y', showInView: 'Y', },
      {fieldName: 'pertymember', fieldLabel: '所属党员', },
      {fieldName: 'pertymemberValue', fieldLabel: '姓名', },
      {fieldName: 'resmark', fieldLabel: '备注', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


