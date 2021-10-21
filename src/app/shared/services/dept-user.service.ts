import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EntityOperator} from '@shared-utils/entity';

@Injectable()
export class DeptUserService {

  constructor(private http: HttpClient) {
  }

  /**
   * 获取字典列表数据，多数情况是为了下拉列表
   */
  public getDeptTreeData(): Observable<object> {
    return this.http.post('getDeptTreeData', {});
  }

  public getDeptList(): Observable<object> {
    return this.http.post('getPageData', {
      entityName: 'Department',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      condition: {}
    });
  }

  public getDeptListByParentId(deptId): Observable<object> {
    return this.http.post('getPageData', {
      entityName: 'Department',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      condition: {lhs: 'parentId', operator: EntityOperator.EQUALS, rhs: deptId}
    });
  }
  public getDeptListByUserLoginId(userLoginId): Observable<object> {
    return this.http.post('getPageData', {
      entityName: 'DeptUserView',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      condition: {lhs: 'userLoginId', operator: EntityOperator.EQUALS, rhs: userLoginId}
    });
  }

  public getUserListByDeptId(deptId): Observable<object> {
    return this.http.post('getUserListByDeptId', {deptId});
  }

  getUserList() {
    return this.http.post('getPageData', {
      entityName: 'UserLogin',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      condition: {}
    });
  }

  getRoleUserList(groupId) {
    return this.http.post('getPageData', {
      entityName: 'SecurityUserLoginView',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      condition: {lhs: 'groupId', operator: EntityOperator.EQUALS, rhs: groupId}
    });
  }

  getUserListWithOutRole(deptId, groupId) {
    return this.http.post('getUserListWithOutRole', {deptId, groupId});
  }

  public saveDeptSort(deptList: Array<any>): Observable<object> {
    const newDeptList = [];
    for (let i = 0; i < deptList.length; i++) {
      const dept = deptList[i];
      const newDept: any = {deptId: dept.id};
      newDept.orderNum = (1000 + i) + '';
      newDeptList.push(newDept);
    }
    return this.http.post('saveDeptSort', {deptList: newDeptList});
  }

  searchDept(inputValue) {
    return this.http.post('getPageData', {
      entityName: 'Department',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      selectField: ['deptName', 'deptId'],
      distinct: true,
      condition: {
        operator: EntityOperator.OR, conditionList: [{lhs: 'deptName', operator: EntityOperator.LIKE, rhs: '%' + inputValue + '%'},
          {lhs: 'deptId', operator: EntityOperator.LIKE, rhs: '%' + inputValue + '%'}]
      }
    });
  }

  searchUser(inputValue) {
    return this.http.post('getPageData', {
      entityName: 'UserLogin',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      distinct: true,
      condition: {
        operator: EntityOperator.OR, conditionList: [{lhs: 'userName', operator: EntityOperator.LIKE, rhs: '%' + inputValue + '%'},
          {lhs: 'userLoginId', operator: EntityOperator.LIKE, rhs: '%' + inputValue + '%'}]
      }
    });
  }

}
