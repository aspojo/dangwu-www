import {DatePipe} from '@angular/common';

export class UtilMisc {
  public static removeListObj(list, pk: object): Array<any> {
    const newArr = [];
    list.forEach(item => {
      let b = true;
      Object.keys(pk).forEach(k => {
        if (item[k] !== pk[k]) {
          b = false;
        }
      });
      if (!b) {
        newArr.push(item);
      }
    });
    return newArr;
  }
  // 格式化【时长】
  public static formatDuring(mss) {
    const days = Math.floor(mss / (1000 * 60 * 60 * 24));
    const hours = Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = (mss % (1000 * 60)) / 1000;
    return days + '天' + hours + '时' + minutes + '分' + seconds + '秒';
  }


  /**
   *
   * @param date 时间对象
   * @param format yyyy-MM-dd ; yyyy-MM-dd HH:mm:ss
   * @returns string 字符串
   */
  public static formatDate(date, format) {
    if (!date) {
      return null;
    }
    const datePipe = new DatePipe('en');
    return datePipe.transform(date, format);

  }


  /**
   * 拷贝对象
   * @param target 目标
   * @param source 源
   * @param fieldMapping 字段映射，仅拷贝指定字段{targetKey:sourceKey}
   */
  public static copyObj(target, source, fieldMapping) {
    let keys;
    if (!fieldMapping) {
      keys = Object.keys(source);
    } else {
      keys = Object.keys(fieldMapping);
    }
    keys.forEach(targetKey => {
      const sourceKey = fieldMapping[targetKey];
      target[targetKey] = source[sourceKey];
    });
  }
}
