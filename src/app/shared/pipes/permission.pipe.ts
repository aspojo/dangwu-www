import {Pipe, PipeTransform} from '@angular/core';
import {UtilValidate} from '@shared-utils/validate';
import {Auth} from '@shared-services/auth';

@Pipe({name: 'permission'})
export class PermissionPipe implements PipeTransform {
  constructor() {
  }

  transform(permissionObj: { permission: string, action: string, permissionList: Array<string>, projectId: string }) {
    const permission = UtilValidate.isEmpty(permissionObj.permission) ? '' : permissionObj.permission;
    const action = UtilValidate.isEmpty(permissionObj.action) ? '' : permissionObj.action;
    const permissionList = UtilValidate.isEmpty(permissionObj.permissionList) ? '' : permissionObj.permissionList;
    const projectId = UtilValidate.isEmpty(permissionObj.projectId) ? '' : permissionObj.projectId;

    let permissions = [];
    if (projectId) {
      if (Auth.userData.projectPermission[projectId]) {
        permissions = Auth.userData.projectPermission[projectId];
      }
    } else {
      permissions = Auth.userData.permissions;
    }
    let permissionCheckPassed = true;
    if (permissionList) {
      for (const permissionItem of permissionList) {
        permissionCheckPassed = this.checkPermission(permissions, permissionItem, action);
        if (!permissionCheckPassed) {
          // 有一项权限不满足就返回权限验证失败
          break;
        }
      }
    } else {
      permissionCheckPassed = this.checkPermission(permissions, permission, action);
    }
    return permissionCheckPassed;
  }

  checkPermission(permissions, permission, action) {
    if (UtilValidate.isEmpty(permission)) {
      // 权限名为空，则任务有该权限
      return true;
    }
    let permissionCheckPassed = false;

    const fullPermission = permission.concat(action);
    const adminPermission = permission.concat('_ADMIN');
    if (permissions.indexOf(adminPermission) >= 0) {
      permissionCheckPassed = true;
    } else if (permissions.indexOf(fullPermission) >= 0) {
      permissionCheckPassed = true;
    }
    return permissionCheckPassed;
  }
}
