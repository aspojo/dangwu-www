import {Pipe, PipeTransform} from '@angular/core';
import {UtilValidate} from '@shared-utils/validate';

/*
 * Usage:
 *   value | trueFalse
 * Example:
 *   {{ 'Y' | trueFalse }}
 *   formats to: 是
*/
@Pipe({name: 'trueFalse'})
export class TrueFalsePipe implements PipeTransform {
  transform(value: string): string {
    if (UtilValidate.isNotEmpty(value)) {
      return (value === 'Y' ? '是' : '否');
    } else {
      return '';
    }
  }
}
