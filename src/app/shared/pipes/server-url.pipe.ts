import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '@environments';
import {UtilValidate} from '@shared-utils/validate';
import {Auth} from '@shared-services/auth';

/*
 * 用法:
 *   value | serverUrl
 * 用例:
 *   {{ 'abc' | serverUrl }}
 *   转换为: http://localhost:6001/eiip/control/abc
*/
@Pipe({name: 'serverUrl'})
export class ServerUrlPipe implements PipeTransform {
  transform(value: string): string {
    if (UtilValidate.isNotEmpty(value)) {
      const url = environment.serverUrl + value + `&t=${new Date().getTime()};jsessionid='` + Auth.userData.jsessionid;
      return url;
    } else {
      return '';
    }
  }
}
