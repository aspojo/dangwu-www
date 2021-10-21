import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {DeptUserService} from '../../services/dept-user.service';
import {MessageService} from '../../services/message-service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonFormInput} from '../../common/common-form-input';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[selectUser]',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectUserComponent, multi: true}
  ],
})
export class SelectUserComponent extends CommonFormInput<any> implements OnChanges, OnInit {

  @Input() selectUser: Array<any> | any;
  @Input() userName: any;
  @Input() rootDept: any;
  @Input() selectOne = true; // 只选择一个值
  @Output() selectedEvent = new EventEmitter<Array<any> | any>();
  @Input() showResultAndSearchButton = true; // 默认显示选中结果和搜索按钮


  deptList: any;
  selectedDept: any;
  userList: Array<any> = [];
  parentDeptList: Array<any> = [];
  selectedUserList: Array<any> = [];
  @ViewChild('selectView', {static: false}) selectView: TemplateRef<any>;
  selectRef: NgbModalRef;
  searchFun: any; // 延时搜索

  constructor(private el: ElementRef, private modalService: NgbModal, public router: Router, private http: HttpClient, private deptUserService: DeptUserService) {
    super();

  }

  ngOnInit() {
    if (!this.showResultAndSearchButton) {
      // 不显示搜索按钮 则为父元素绑定点击事件
      const element: HTMLElement = this.el.nativeElement;
      element.addEventListener('click', (event) => {
        this.openSelectView();
      });
    }
  }

  openSelectView() {
    this.selectRef = this.modalService.open(this.selectView, {size: 'lg'});
    this.ngOnChanges();
  }

  writeValue(value: any) {
    this.innerValue = value;
    if (this.value && this.selectedUserList.length === 0) {
      // 第一次绑定，做初始化操作
      let list;
      if (this.value instanceof Array) {
        list = this.value;
      } else {
        this.userName = this.userName || this.value;
        list = [{userLoginId: this.value, userName: this.userName, checked: true}];
      }
      this.selectedUserList = list;
    }
  }

  ngOnChanges() {

    this.deptList = null;
    this.selectedDept = null;
    this.parentDeptList = [];
    // this.selectedUserList = [];
    if (!this.rootDept) {
      this.rootDept = {deptId: 'null'};
    }
    this.selectedDept = this.rootDept;
    this.parentDeptList.push(this.rootDept);
    this.loadDeptAndUser();

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
    this.deptUserService.getUserListByDeptId(this.selectedDeptId).subscribe((userList: any) => {
      this.userList = userList;
      this.synUserListSelectState();
    });
  }

  synUserListSelectState() {
    // 初始化人员选中效果
    this.userList.forEach(item => {
      this.selectedUserList.forEach(selected => {
        if (item.userLoginId && (item.userLoginId === selected.userLoginId)) {
          item.checked = true;
        }
      });
    });
  }


  deptSelectClick(item) {
    this.selectedDept = item;
    const newParentDeptList = [];
    for (const parent of this.parentDeptList) {
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
    if (this.selectedUserList.length === 0) {
      this.value = 'null';
      this.selectedEvent.emit(null);
    }
    // 从选中列表删除时，同步取消左侧人员选中效果。
    this.userList.forEach(item => {
      if (item.userLoginId === user.userLoginId) {
        item.checked = user.checked;
      }
    });
  }

  clickOk() {
    if (this.selectedUserList.length === 0) {
      MessageService.showGlobalMessage('danger', '请选择1人');
    } else {
      if (this.selectOne) {
        if (this.selectedUserList.length !== 1) {
          MessageService.showGlobalMessage('danger', '只可选择一人');
        } else {
          const userData: any = this.selectedUserList[0];
          this.value = userData.userLoginId;
          this.selectedEvent.emit(userData);
          this.selectRef.close();
        }
      } else {
        this.selectedEvent.emit(this.selectedUserList);
        this.selectRef.close();
      }
    }
  }

  searchChange(event) {
    clearTimeout(this.searchFun);
    this.userList = [];
    this.searchFun = setTimeout(() => {
      const value = event.target.value;
      if (value) {
        this.deptUserService.searchUser(value).subscribe((data: any) => {
          this.userList = data.list;
          this.synUserListSelectState();
        });
      } else {
        this.loadUserData();
      }
    }, 1000);

  }


}
