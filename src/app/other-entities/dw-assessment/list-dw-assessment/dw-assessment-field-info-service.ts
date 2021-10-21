import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';
import {Observable} from 'rxjs';

@Injectable()
export class DwAssessmentFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwAssessment';
  }

  get queryEntityName() {
    return 'DwAssessmentView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'ID', showInView: 'Y', required: 'Y', isValueField: 'Y',},
      {fieldName: 'year', fieldLabel: '年度', showInTable: 'Y', showInView: 'Y', required: 'Y', showInEdit: 'Y',},
      {fieldName: 'assessmentResult', fieldLabel: '结果', showInTable: 'Y', showInView: 'Y', required: 'Y', showInEdit: 'Y',},
      {fieldName: 'pertymember', fieldLabel: '姓名', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'pertymemberValue', fieldLabel: '姓名', showInView: 'Y',},
    ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

  assessmentData(PK, infoMap): Observable<any> {
    const newList = [];
    for (let i = 0; i < PK.length; i++) {
      const newDept: any = {};
      newDept.year = infoMap.year;
      newDept.assessmentResult = infoMap.assessmentResult;
      newDept.pertymember = PK[i].id;
      newList.push(newDept);
    }
    // 保存数据
    return this.http.post('genericSaveAll', {
      entityName: this.entityName,
      valueList: newList,
      autoPK: true
    });
  }
}


