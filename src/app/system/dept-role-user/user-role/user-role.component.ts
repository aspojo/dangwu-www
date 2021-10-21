import {Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {MessageService} from '../../../shared/services/message-service';
import {DeptUserService} from '../../../shared/services/dept-user.service';
import {EntityOperator} from '@shared-utils/entity';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css'],
})
export class UserRoleComponent implements OnChanges {
  @Input() selectedRole: any;
  @Input() rootDept: any;
  @Output() roleChange = new EventEmitter<any>();
  userDataTemp: any = {};

  dataList;
  userDataList;


  @ViewChild('roleTree', {static: false}) roleTree;
  routerSubscription;
  deptList: any;
  userList: Array<any> = [];

  selectedDept: any;
  parentDeptList: Array<any> = [];
  selectedUserList: Array<any> = [];
  addUserModalRef: NgbModalRef;

  constructor(public router: Router, private http: HttpClient, private deptUserService: DeptUserService, private modalService: NgbModal) {
    this.initNewUser();
  }

  ngOnChanges() {
    this.loadDataList();
    this.parentDeptList = [];
    this.selectedUserList = [];

    this.selectedDept = this.rootDept;
    this.parentDeptList.push(this.rootDept);
  }

  loadDataList() {
    this.userDataTemp.groupId = this.selectedRole.groupId;
    this.userDataTemp.groupName = this.selectedRole.groupName;
    this.http.post('getPageData', {
      entityName: 'SecurityUserLoginView',
      viewSize: 100000,
      hasTimestamp: 'N',
      condition: {lhs: 'groupId', operator: EntityOperator.EQUALS, rhs: this.userDataTemp.groupId},
      fieldFormat: {fromDate: {format: 'yyyy-MM-dd HH:mm:ss'}, thruDate: {format: 'yyyy-MM-dd HH:mm:ss'}}
    }).subscribe(data => {
      this.dataList = data['list'];
    });
  }

  initNewUser() {
    this.userDataTemp = {enabled: 'Y', fromDate: new DatePipe('en').transform(new Date(), 'yyyy-MM-dd HH:mm:00')};
  }

  // 将用户添加到角色
  addData() {
    this.userDataTemp.fromDate = this.userDataTemp.fromDate.toString();
    if (this.userDataTemp.thruDate) {
      this.userDataTemp.thruDate = this.userDataTemp.thruDate.toString();
    }
    this.selectedUserList.forEach(item => {
      item.groupId = this.selectedRole.groupId;
      item.fromDate = this.userDataTemp.fromDate;
      item.thruDate = this.userDataTemp.thruDate;
    });
    // this.userDataTemp.fromDate = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd 00:00:00.000');
    this.http.post('genericSaveAll', {
      entityName: 'UserLoginSecurityGroup',
      valueList: this.selectedUserList
    }).subscribe(data => {
      if (data['error'] == null) {
        // 添加DepartmentUserLogin数据
        MessageService.showGlobalMessage('success', '添加成功！');
        this.ngOnChanges();
      }
    });
    this.addUserModalRef.close();
  }

  deleteById(userData) {
    // 删除关系数据
    this.http.post('genericDelete', {
      entityName: 'UserLoginSecurityGroup',
      // PK: [{userLoginId: userData.userLoginId, groupId: userData.groupId}]
      PK: [userData]
    }).subscribe(data => {
      if (data['error'] == null) {
        MessageService.showGlobalMessage('success', '删除完成！');
        this.ngOnChanges();
      }
    });
  }


  searchChange(event) {
    const value = event.target.value;
    this.dataList.forEach(dataItem => {
      const ud = dataItem.userLoginId;
      const un = dataItem.userName;
      const gn = dataItem.groupName;

      if (ud && ud.indexOf(value) > -1 || (un && un.indexOf(value) > -1) || (gn && gn.indexOf(value) > -1)) {
        dataItem['__show__'] = true;
      } else {
        dataItem['__show__'] = false;
      }
    });
  }

  addUserClick(addUserView) {
    this.loadDeptAndUser();
    this.addUserModalRef = this.modalService.open(addUserView, {size: 'lg'});
  }

  loadDeptAndUser() {
    this.deptUserService.getDeptListByParentId(this.selectedDeptId).subscribe((deptList: any) => {
      this.deptList = deptList.list;
    });
    this.loadUserData();
  }

  get selectedDeptId() {
    let deptId = this.rootDept.deptId;
    if (this.selectedDept) {
      deptId = this.selectedDept.deptId;
    }
    return deptId;
  }

  loadUserData() {
    this.deptUserService.getUserListWithOutRole(this.selectedDeptId, this.selectedRole.groupId).subscribe((userList: any) => {
      this.userList = userList;
      this.synUserListSelectState();
    });
  }

  synUserListSelectState() {
    // 初始化人员选中效果
    this.userList.forEach(item => {
      this.selectedUserList.forEach(selected => {
        if (item.userLoginId === selected.userLoginId) {
          item.checked = true;
        }
      });
    });
  }

  notifyRoleTreeChange(e) {
    this.roleChange.emit(e);
  }

  deptSelectClick(item) {
    this.selectedDept = item;
    const newParentDeptList = [];
    for (let i = 0; i < this.parentDeptList.length; i++) {
      const parent = this.parentDeptList[i];
      if (parent.deptId !== item.deptId) {
        // 遇到当前部门父节点就停止。
        newParentDeptList.push(parent);
      } else {
        break;
      }
    }
    // 把当前节点也放入父节点链表
    newParentDeptList.push(item);

    this.parentDeptList = newParentDeptList;
    this.loadDeptAndUser();
  }


  get isAllUserChecked() {
    if (this.userList == null || this.userList.length === 0) {
      return false;
    }
    let hasNotChecked = true;
    this.userList.forEach(item => {
      hasNotChecked = hasNotChecked && !item.checked;
    });
    return !hasNotChecked;
  }

  checkAllUser() {
    let b = true;
    if (this.isAllUserChecked) {
      b = false;
    }
    this.userList.forEach(item => {
      if (item.checked !== b) {
        // 状态不一致，需要改变状态
        this.changeSelect(item);
      }
    });
  }

  // 选中，或者取消选中
  changeSelect(user) {
    user.checked = !user.checked;
    if (user.checked) {
      // 添加选中
      this.selectedUserList.push(user);
    } else {
      const newList = [];
      this.selectedUserList.forEach(item => {
        if (item.userLoginId !== user.userLoginId) {
          newList.push(item);
        }
      });
      this.selectedUserList = newList;
    }
    // 从选中列表删除时，同步取消左侧人员选中效果。
    this.userList.forEach(item => {
      if (item.userLoginId === user.userLoginId) {
        item.checked = user.checked;
      }
    });
  }
}
