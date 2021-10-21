import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DicService {

  constructor(private http: HttpClient) {
  }

  /**
   * 获取字典列表数据，多数情况是为了下拉列表
   */
  public getDicEnabled(parentId): Observable<object> {
    return this.http.post('getDicDataListByParentId', {parentId, enabled: 'Y'});
  }

  /**
   * 获取字典列表数据，多数情况是为了下拉列表
   */
  public getDicByParentId(parentId): Observable<object> {
    return this.http.post('getDicDataListByParentId', {parentId});
  }

  /**
   * 保存字典排序
   */
  public saveDicSort(dicList: Array<any>): Observable<object> {
    const newDicList = [];
    for (let i = 0; i < dicList.length; i++) {
      const dic = dicList[i];
      const newDept: any = {dicId: dic.dicId};
      newDept.orderNum = (1000 + i) + '';
      newDicList.push(newDept);
    }
    return this.http.post('genericSaveAll', {
      entityName: 'FadpDic',
      valueList: newDicList
    });
  }

}
