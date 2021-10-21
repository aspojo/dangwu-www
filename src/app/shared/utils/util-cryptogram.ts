import * as sha1 from 'js-sha1';
export class UtilCryptogram {
  public static hexSha1(str) {
    return sha1(str);
  }
}
