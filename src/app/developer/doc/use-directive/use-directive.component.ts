import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '@shared-services/message';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.scss'],

})
export class UseDirectiveComponent implements OnInit {

  selectDeptIdData: any; // 选中部门id
  selectDeptData: any; // 选中部门
  selectUserIdData: any; // 选中用户id
  selectUserData: any; // 选中用户

  // 选中部门完整数据

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
