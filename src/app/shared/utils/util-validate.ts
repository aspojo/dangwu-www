export class UtilValidate {
  public static isNotEmpty(value): boolean {
    if (
      value === null
      || value === 'null'
      || value === undefined
      || value === ''
      || (value instanceof Array && value.length === 0)
      || (value.constructor.toString().startsWith('function Object()') && Object.keys(value).length === 0)
    ) {
      return false;
    }
    return true;
  }

  public static isEmpty(value): boolean {
    return !UtilValidate.isNotEmpty(value);
  }
}
