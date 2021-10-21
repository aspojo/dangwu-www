import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';

@Injectable()
export class DemoOrderFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DemoOrder';
  }

  get queryEntityName() {
    return 'DemoOrderView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'orderId', PK: 'Y', fieldLabel: '订单id', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', required: 'Y', isValueField: 'Y', },
      {fieldName: 'orderName', fieldLabel: '订单名称', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', isShowField: 'Y', },
      {
        fieldName: 'accountMethod', fieldLabel: '结算方式', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', component: 'select', 
        dicId: 'accountMethod',
      },
      {fieldName: 'saleUser', fieldLabel: '销售人', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', component: 'selectUser', },
      {fieldName: 'operator', fieldLabel: '操作人', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', defaultValue: '$currentUser', },
      {fieldName: 'amount', fieldLabel: '金额', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', },
      {fieldName: 'createTime', fieldLabel: '创建时间', fieldType: 'dateTime', showInQuery: 'Y', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', defaultValue: '$currentDatetime', },
        ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


