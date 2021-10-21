import {Observable} from 'rxjs';
import {UtilValidate} from '@shared-utils/validate';
import {MessageService} from '@shared-services/message';

export const EntityOperator = {
  EQUALS: 'EQUALS',
  NOT_EQUAL: 'NOT_EQUAL',
  LESS_THAN: 'LESS_THAN',
  GREATER_THAN: 'GREATER_THAN',
  LESS_THAN_EQUAL_TO: 'LESS_THAN_EQUAL_TO',
  GREATER_THAN_EQUAL_TO: 'GREATER_THAN_EQUAL_TO',
  IN: 'IN',
  BETWEEN: 'BETWEEN',
  NOT: 'NOT',
  AND: 'AND',
  OR: 'OR',
  LIKE: 'LIKE',
  NOT_IN: 'NOT_IN',
  NOT_LIKE: 'NOT_LIKE'
};

export class EntityFieldValidate {
  // static min(min: number): ValidatorFn
  // static max(max: number): ValidatorFn
  // static required(control: AbstractControl): ValidationErrors | null
  // static requiredTrue(control: AbstractControl): ValidationErrors | null
  // static email(control: AbstractControl): ValidationErrors | null
  // static minLength(minLength: number): ValidatorFn
  // static maxLength(maxLength: number): ValidatorFn
  // static pattern(pattern: string | RegExp): ValidatorFn
  // static nullValidator(c: AbstractControl): ValidationErrors | null
  // static compose(validators: (ValidatorFn | null | undefined)[] | null): ValidatorFn | null
  // static composeAsync(validators: (AsyncValidatorFn | null)[]): AsyncValidatorFn | null

  errorList = [];

  formData: any;

  constructor(formData) {
    this.formData = formData;
  }

  min(min: number, fieldName, fieldLabel) {
    if (this.fieldValue(fieldName) < min) {
      this.errorList.push(fieldLabel + '长度不可少于' + min);
    }
  }

  required(fieldInfo: FieldInfo) {
    if (UtilValidate.isEmpty(this.fieldValue(fieldInfo.fieldName))) {
      this.errorList.push(fieldInfo.fieldLabel + '不可为空');
    }
  }

  fieldValue(fieldName) {
    return this.formData[fieldName];
  }

  get valid() {
    if (this.errorList.length > 0) {
      this.errorList.forEach(item => {
        MessageService.showGlobalMessage('danger', item);
      });
    }
    return this.errorList.length === 0;
  }

  addError(err) {
    this.errorList.push(err);
  }
}

/**
 * 查询条件
 * 使用方法如下：
 * 有查询表单数据：this.queryData = {orderCode; orderDate_fld0; orderDate_fld0: '2018-02-20'};
 * 查询条件可以如下构造
 * conditionList = EntityCondition.makeCondition(this.queryData, [
 * new ConditionExprTempLate('orderCode', EntityOperator.LIKE, 'orderCode'),
 * new ConditionExprTempLate('orderDate', EntityOperator.GREATER_THAN_EQUAL_TO, 'orderDate_fld0'),
 * new ConditionExprTempLate('orderDate', EntityOperator.LESS_THAN_EQUAL_TO, 'orderDate_fld1')
 * ]);
 * }
 * 注意其中 XXX_fld0  XXX_fld1 代表区间查询
 */
export class EntityCondition {
  static makeCondition(obj: any, conditionTemplate: Array<ConditionExprTempLate>) {
    const conditionList: Array<ConditionExpr> = [];
    conditionTemplate.forEach(item => {
      if (obj[item.formField]) {
        // 有输入查询数据
        if (!item.operator) {
          // 默认查询条件为相等
          item.operator = EntityOperator.EQUALS;
        }
        conditionList.push(Object.assign(item, {rhs: obj[item.formField]}));
        delete item.formField;
      }
    });
    return conditionList;
  }

  static makeConditionList(obj): Array<ConditionExpr> {
    const conditionList: Array<ConditionExpr> = [];
    Object.keys(obj).forEach(key => {
      conditionList.push(new ConditionExpr(key, EntityOperator.EQUALS, obj[key]));
    });
    return conditionList;
  }
}

export class ConditionExpr {

  lhs;
  operator;
  rhs;

  constructor(lhs, operator, rhs) {
    this.lhs = lhs;
    this.operator = operator;
    this.rhs = rhs;
  }

}

/**
 * 查询条件模版
 * 当formField为空时，使用lhs作为formField
 */
export class ConditionExprTempLate {

  lhs;
  operator;
  formField;

  constructor(lhs, operator, formField) {
    this.lhs = lhs;
    this.operator = operator;
    this.formField = formField ? formField : this.lhs;
  }

}

export declare class FieldInfo {
  fieldName;
  PK;
  fieldLabel;
  fieldType;
  showInQuery;
  showInTable;
  showInView;
  showInEdit;
  isValueField;
  isShowField;
  component;
  dicId;
  relEntityName;
  relFieldName;
  relFieldValue;
  condition: ConditionExpr;
  selectDataList: Observable<any>;
  required: string;
  isApproveStateField: string;
  orderBy: string;
  defaultValue: string;
  displayName;
}



