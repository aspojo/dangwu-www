import {Pipe, PipeTransform} from '@angular/core';
import {UtilValidate} from '@shared-utils/validate';

/*
 * 用法:
 *   value | serverUrl
 * 用例:
 *   {{ 'abc' | serverUrl }}
 *   转换为: http://localhost:6001/eiip/control/abc
*/
@Pipe({name: 'fileName'})
export class FileNamePipe implements PipeTransform {
  transform(value: string): string {
    if (UtilValidate.isNotEmpty(value)) {
      const arr2 = value.split('/');
      return value.split('/')[arr2.length - 1];
    } else {
      return '';
    }
  }
}
