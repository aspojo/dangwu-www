import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '@shared-services/message';

@Component({
  selector: 'app-use-permission',
  templateUrl: './use-permission.component.html',
  styleUrls: ['./use-permission.component.scss'],

})
export class UsePermissionComponent implements OnInit {

  selectDeptIdData: any; // 选中部门id
  selectDeptData: any; // 选中部门
  selectUserIdData: any; // 选中用户id
  selectUserData: any; // 选中用户
  // 用于管道数据变量使用
  viewDataTemp = {
    filePath: '/pm/ueditor/jsp/image/demo.png ',
    permissionFilter : { permission: 'SALE_DELIVER', action: '_CREATE', permissionList: [], projectId: ''},
    imaSrc: 'http://localhost:6001/pm/control/download/pm/ueditor/jsp/upload/image/20190904/demo.png',
    trueFalseValue: 'Y'
  };

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
  }

  stringify(data) {
    return JSON.stringify(data);
  }


  // 确认通过后执行的方法
  confirmClickEvent() {
    MessageService.showGlobalMessage('success', '已确认');
  }


  // 部门选择事件
  deptSelectedEvent(data) {
    this.selectDeptData = data;
  }

  // 人员选择事件
  userSelectedEvent($event) {
    this.selectUserData = $event;
  }

}
