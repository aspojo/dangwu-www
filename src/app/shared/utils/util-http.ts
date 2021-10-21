import {UtilValidate} from '@shared-utils/validate';

export class UtilHttp {
  // 判断服务器是否返回错误信息
  public static hasError(data): boolean {
    if (data == null) {
      return false;
    }
    return UtilValidate.isNotEmpty(data.error);
  }

  public static notHasError(data): boolean {
    return !UtilHttp.hasError(data);
  }
}
