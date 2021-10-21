import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntityOperator} from '@shared-utils/entity';
import {MessageService} from '@shared-services/message';
import {Observable} from 'rxjs';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit, OnChanges {

  @Input() inEdit = false;
  @Input() roleDataTemp;
  @Output() roleChange = new EventEmitter<any>();
  dataList;
  permissionDataList; // 权限数据
  permissionDataSegment: any[] = [];

  permissionTypeList;
  treeMap: any = {'null': {}};
  editRoleModalRef: NgbModalRef;

  public groupIds = [];
  public groupNames = [];
  public currentGroupId = '';
  public currentGroupName = '';

  constructor(private http: HttpClient, private modalService: NgbModal) {
  }


  ngOnInit() {
    this.loadPermissionType().subscribe(() => {
      this.loadPermissionData();
    });
  }

  ngOnChanges() {
    if (this.permissionDataList) {
      this.getCurrentGroupPermissionData();
    }
  }


  loadPermissionType(): Observable<any> {

    const obser = new Observable(subscriber => {
      this.http.post('getPageData', {entityName: 'PermissionCategory', viewSize: 100000, condition: {}}).subscribe(data => {

        this.permissionTypeList = data['list'];

        this.permissionTypeList.forEach(item => {
          this.treeMap[item.typeId] = item;
        });
        this.permissionTypeList.forEach(item => {
          this.addToParent(item);
        });
        subscriber.next();
      });
    });
    return obser;

  }

  addToParent(node) {
    const parentId = node.parentId ? node.parentId : 'null';
    const parentNode = this.treeMap[parentId];
    let children = parentNode.children;
    if (!children) {
      children = [];
      parentNode.children = children;
    }
    children.push(node);
  }

  get permList() {
    return this.treeMap.null.children;
  }

  loadPermissionData() {
    this.http.post('getPageData', {entityName: 'SecurityPermissionSystemView', viewSize: 100000, condition: {}}).subscribe(data => {

      this.permissionDataList = data['list'];
      this.permissionDataList.forEach(permission => {
        const type = permission.category;
        const typeNode = this.treeMap[type];
        let permList = typeNode.permList;
        if (!permList) {
          permList = [];
          typeNode.permList = permList;
        }
        permList.push(permission);
      });
      this.getCurrentGroupPermissionData();
    });
  }


  addGroupClick(editRoleView) {
    this.currentGroupId = '';
    this.currentGroupName = '';
    this.editRoleModalRef = this.modalService.open(editRoleView, {size: 'lg'});
    this.validateInfo();
  }

  validateInfo() {
    const condition = {conditionList: [], operator: EntityOperator.AND};
    condition.conditionList.push({lhs: 'groupType', operator: EntityOperator.EQUALS, rhs: 'all'});
    this.http.post('validateInfo', {'entityName': 'SecurityGroup', 'filedId': 'groupId', 'filedName': 'groupName', 'condition': condition}).subscribe((data: any) => {
      this.groupIds = data.groupId;
      this.groupNames = data.groupName;
      console.log(data);
    });

  }


  editGroupClick(editRoleView) {
    this.currentGroupId = this.roleDataTemp.groupId;
    this.currentGroupName = this.roleDataTemp.groupName;
    this.editRoleModalRef = this.modalService.open(editRoleView, {size: 'lg'});
    this.validateInfo();
  }

  saveData() {
    const saveData = {
      entityName: 'SecurityGroup',
      fieldMap: this.roleDataTemp,
      autoPK: true
    };

    if (undefined !== this.groupIds && null !== this.groupIds && this.groupIds.length > 0) {
      if (this.currentGroupId !== saveData.fieldMap.groupId) {
        // 验证角色标识是否存在
        if (this.groupIds.length > 0) {
          if (this.groupIds.indexOf(saveData.fieldMap.groupId) > -1) {
            MessageService.showGlobalMessage('danger', '角色标识已经存在！');
            return;
          }
        }
      }
    }

    if (undefined !== this.groupNames && null !== this.groupNames) {
      if (this.currentGroupName !== saveData.fieldMap.groupName) {
        // 验证角色名称是否存在
        if (this.groupNames.length > 0) {
          if (this.groupNames.indexOf(saveData.fieldMap.groupName) > -1) {
            MessageService.showGlobalMessage('danger', '角色名称已经存在！');
            if (this.inEdit) {
              saveData.fieldMap.groupName = this.currentGroupName;
            }
            return;
          }
        }
      }
    }
    this.http.post('genericSave', {
      entityName: 'SecurityGroup',
      fieldMap: this.roleDataTemp
    }).subscribe(data => {
      if (data['error'] == null) {
        this.updatePermission();
        this.roleChange.emit(data);
      }
    });
    this.editRoleModalRef.close();
  }

  deleteById(deleteData) {
    this.editRoleModalRef.close();
    // 删除关系数据
    this.http.post('genericDelete', {
      entityName: 'SecurityGroup',
      PK: [deleteData]
    }).subscribe(data => {
      if (data['error'] == null) {
        MessageService.showGlobalMessage('success', '删除完成！');
        this.roleChange.emit(data);
      }
    });
  }


  searchChange(event) {
    const value = event.target.value;
    this.dataList.forEach(dataItem => {
      const gid = dataItem.groupId;
      const desc = dataItem.description;

      if (gid && gid.indexOf(value) > -1 || (desc && desc.indexOf(value) > -1)) {
        dataItem['__show__'] = true;
      } else {
        dataItem['__show__'] = false;
      }
    });
  }


  getCurrentGroupPermissionData() {
    if (this.inEdit) {
      this.http.post('getPageData', {
        entityName: 'SecurityGroupPermission',
        viewSize: 100000,
        viewIndex: 0,
        noConditionFind: 'Y',
        hasTimestamp: 'N',
        condition: {lhs: 'groupId', operator: EntityOperator.EQUALS, rhs: this.roleDataTemp.groupId}
      }).subscribe(data => {
        const map = {};
        data['list'].forEach(item => {
          map[item.permissionId] = true;
        });
        this.permissionDataList.forEach(permission => {
          if (map[permission.permissionId]) {
            permission.checked = true;
          } else {
            permission.checked = false;
          }
        });

      });
    }
  }

  updatePermission() {
    const newPermissionList = [];
    this.permissionDataList.forEach(permission => {
      if (permission.checked) {
        newPermissionList.push(permission);
      }
    });
    this.http.post('updateRolePermission', {groupId: this.roleDataTemp.groupId, permissionList: newPermissionList}).subscribe(data => {
      if (data['error'] == null) {
        MessageService.showGlobalMessage('success', '保存成功！');
      }
    });
    return false;
  }

  searchPermission(event) {
    const value = event.target.value.toLowerCase();
    this.permissionDataList.forEach(dataItem => {
      const gid = dataItem.permissionId.toLowerCase();
      const desc = dataItem.description;

      if (gid && gid.indexOf(value) > -1 || (desc && desc.indexOf(value) > -1)) {
        dataItem['__show__'] = true;
      } else {
        dataItem['__show__'] = false;
      }
    });
  }

  collapse(node, b) {
    node.isCollapsed = b;
    const children = node.children;
    if (children) {
      children.forEach(childNode => {
        this.collapse(childNode, b);
      });
    }

  }

  checkAll(node, event) {
    if (node.__show__ !== false) {
      node.checked = event.target.checked;
    }
    const permList = node.permList ? node.permList : node.children;
    if (permList) {
      permList.forEach(childNode => {
        this.checkAll(childNode, event);
      });
    }
  }

  openEditRoleView(editRoleView) {
    this.editRoleModalRef = this.modalService.open(editRoleView, {size: 'lg'});
    // this.validateInfo();
  }
}
