import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {MessageService} from '../../../shared/services/message-service';
import {EntityOperator} from '@shared-utils/entity';
import {DeptUserService} from '../../../shared/services/dept-user.service';
import {Observable} from 'rxjs';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UtilCryptogram} from '@shared-utils/cryptogram';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnChanges {

  userDataTemp: any;


  selectedDept: any;
  @Input() selectedNode: any;
  @Output() deptChange = new EventEmitter<any>();

  dataList;

  @ViewChild('addForm', {static: false}) addForm: NgForm;

  inEditView = false;

  selectedDeptList: Array<any> = [];
  userDetpList: Array<any> = [];

  addUserToDeptModalRef: NgbModalRef;
  resetPasswordModalRef: NgbModalRef;

  constructor(private router: Router, private http: HttpClient, private deptUserService: DeptUserService, private modalService: NgbModal) {
    this.initNewUser();
  }

  initNewUser() {
    this.userDataTemp = {enabled: 'Y'};
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadDataByNodeId();
  }

  loadDataByNodeId() {
    this.initNewUser();

    let deptId = null;
    this.selectedDept = this.selectedNode.data;
    deptId = this.selectedDept.deptId;
    this.deptUserService.getUserListByDeptId(deptId).subscribe(data => {
      this.dataList = data;
    });

  }

  saveData() {
    const formData = this.addForm.value;
    this.checkData(formData);
    if (this.inEditView) {
      return this.updateData(formData);
    } else {
      formData.id = formData.userLoginId;
      return this.addData(formData);
    }
  }

  checkData(data) {
    if (data.currentPassword) {
      data.currentPassword = '{SHA}' + UtilCryptogram.hexSha1(data.currentPassword);
    }
    return data;
  }

  // 添加用户
  addData(formData) {
    this.http.post('genericSave', {
      autoPK: true,
      autoPKFieldName: 'workNumber',
      entityName: 'UserLogin',
      fieldMap: formData
    }).subscribe(data => {
      if (data['error'] == null) {
        // 向列表添加人员
        formData.checked = true;
        this.dataList.push(formData);
        // 添加DepartmentUserLogin数据
        this.selectedDeptList.push(this.selectedDept);
        this.addUserToDeptSave();
      }
    });
  }

  // 批量删除用户
  deleteUsers() {

    // 删除关系数据
    this.http.post('genericDelete', {
      entityName: 'DepartmentUserLogin',
      PK: this.getSelectedUserPK()
    }).subscribe(data => {
      if (data['error'] == null) {
        // 删除UserLogin数据
        this.http.post('genericDelete', {
          entityName: 'UserLogin',
          PK: this.getSelectedUserPK()
        }).subscribe(data2 => {
          if (data2['error'] == null) {
            MessageService.showGlobalMessage('success', '删除完成！');
            // 删除列表数据
            // this.loadDataByNodeId();
            this.deptChange.emit('removeUser');
          }
        });
      }
    });
  }

  getSelectedUserPK() {
    const PKList = [];
    this.dataList.forEach(dataItem => {
      if (dataItem.checked) {
        PKList.push({userLoginId: dataItem.userLoginId});
      }
    });
    return PKList;
  }


  updateData(fieldMap) {
    const list = [];
    this.dataList.forEach(dataItem => {
      if (dataItem.checked) {
        list.push(Object.assign({userLoginId: dataItem.userLoginId}, fieldMap));
      }
    });
    this.http.post('genericSaveAll', {
      entityName: 'UserLogin',
      valueList: list
    }).subscribe(data => {
      if (data['error'] == null) {
        MessageService.showGlobalMessage('success', '修改成功！');
        this.loadDataByNodeId();
      }
    });
  }


  resetPassword() {
    this.updateData({currentPassword: '{SHA}' + UtilCryptogram.hexSha1(this.userDataTemp.currentPassword)});
    this.resetPasswordModalRef.close();
  }

  toggleEnable() {
    this.updateData({enabled: this.userDataTemp.enabled});
  }

  searchChange(event) {
    const value = event.target.value;
    this.dataList.forEach(dataItem => {
      const ud = dataItem.userLoginId;
      const un = dataItem.userName;

      if (ud && ud.indexOf(value) > -1 || (un && un.indexOf(value) > -1)) {
        dataItem['__show__'] = true;
      } else {
        dataItem['__show__'] = false;
      }
    });
  }

  // 向部门添加现有用户
  addUserToDeptSave() {
    // 先从当前部门删除人员
    let PK = null;
    if (this.checkedNum === 1) {
      // 单人调整
      PK = this.userDetpList.map((item) => {
        return {userLoginId: this.getSelectedUserPK()[0].userLoginId, deptId: item.deptId};
      });
    } else {
      PK = this.getSelectedUserPK().map((userDeptItem) => {
        userDeptItem.deptId = this.selectedDept.deptId;
        return userDeptItem;
      });
    }
    this.http.post('genericDelete', {
      entityName: 'DepartmentUserLogin',
      PK: PK
    }).subscribe(data => {
      if (data['error'] == null) {
        // 再添加到选中部门
        const list = [];
        this.selectedDeptList.forEach(deptItem => {
          this.dataList.forEach(userItem => {
            if (userItem.checked) {
              list.push({userLoginId: userItem.userLoginId, deptId: deptItem.deptId});
            }
          });
        });
        this.http.post('genericSaveAll', {
          entityName: 'DepartmentUserLogin',
          valueList: list
        }).subscribe(data2 => {
          if (data2['error'] == null) {
            MessageService.showGlobalMessage('success', '操作成功！');
            // 刷新列表
            this.loadDataByNodeId();
            this.deptChange.emit('addToDept');
          }
        });
      }
    });
    this.addUserToDeptModalRef.close();
  }

  validateInfo() {

    const condition = {conditionList: [], operator: EntityOperator.AND};
    condition.conditionList.push({lhs: 'enabled', operator: EntityOperator.EQUALS, rhs: 'Y'});


    this.http.post('validateInfo', {'entityName': 'UserLogin', 'filedId': 'userLoginId', 'filedName': 'workNumber', 'condition': condition}).subscribe((data: any) => {
      if (undefined !== data && null !== data) {
        console.log('data===', data);
        UserEditComponent.userLoginIds = data.userLoginId;
        UserEditComponent.workNumbers = data.workNumber;
      }
      console.log(data);
    });
  }

  userDataChange() {
    this.loadDataByNodeId();
    this.deptChange.emit('addToDept');
  }

// 从部门删除现有用户
  deleteFromDeptById(deptData) {
    this.deleteDept(deptData).subscribe(() => {
    });
  }

  deleteDept(deptData) {
    const obs: Observable<any> = new Observable(subscriber => {
      this.http.post('genericDelete', {
        entityName: 'DepartmentUserLogin',
        PK: [deptData]
      }).subscribe(data2 => {
        if (data2['error'] == null) {
          MessageService.showGlobalMessage('success', '移除成功！');
          this.loadDataByNodeId();
          subscriber.next({});
        }
      });
    });
    return obs;
  }

  addUserClick(addUserModalRef) {
    this.inEditView = false;
    if (this.selectedDept) {
      const defaultValue = {
        deptId: this.selectedDept.deptId,
        deptName: this.selectedDept.deptName,
        enabled: 'Y',
        userSex: '男',
        currentPassword: '123456'
      };
      this.addForm.resetForm(defaultValue);
      addUserModalRef.open();
    } else {
      MessageService.showGlobalMessage('danger', '请先选择部门');
    }

  }

  editUserClick(addUserModalRef, data: any) {
    this.inEditView = true;
    this.addForm.resetForm(data);
    addUserModalRef.open();
  }

  checkItem(item) {
    item.checked = !item.checked;
  }

  checkAll() {
    const b = !this.isAllChecked;
    this.dataList.forEach((item: any) => {
      item.checked = b;
    });
  }

  get isAllChecked() {
    return (this.dataList != null) && (this.dataList.length > 0) && (this.checkedNum === this.dataList.length);
  }

  get checkedNum() {
    let checkedNum = 0;
    if (this.dataList) {
      this.dataList.forEach((item: any) => {
        checkedNum += (item.checked ? 1 : 0);
      });
    }
    // this.isAllChecked = (this.checkedNum === this.peopleList.length);
    return checkedNum;
  }

  selectChange(selectedDeptList) {
    this.selectedDeptList = selectedDeptList;
  }


  changeDeptClick(addUserToDeptView) {
    if (this.checkedNum === 1) {
      this.deptUserService.getDeptListByUserLoginId(this.getSelectedUserPK()[0].userLoginId).subscribe((data: any) => {
        this.userDetpList = data.list;
        this.selectedDeptList = data.list;
      });
    } else {
      this.userDetpList = [];
      this.selectedDeptList = [];
    }
    this.addUserToDeptModalRef = this.modalService.open(addUserToDeptView, {size: 'lg'});

  }

  openResetPasswordView(resetPasswordView) {
    this.resetPasswordModalRef = this.modalService.open(resetPasswordView);
  }

  validateForm() {
    const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
    if (undefined !== this.userDataTemp.currentPassword && this.userDataTemp.currentPassword !== '' && this.userDataTemp.currentPassword.length >= 5 && !reg.test(this.userDataTemp.currentPassword)) {
      return false;
    } else {
      return true;
    }
  }
}
