import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {DeptUserService} from '../../../shared/services/dept-user.service';

@Component({
  selector: 'app-select-dept',
  templateUrl: './select-dept.component.html',
  styleUrls: ['./select-dept.component.css'],
})
export class SelectDeptComponent implements OnChanges {
  @Input() rootDept: any; // 根部门
  @Input() selectedDeptList: Array<any>; // 选中的部门
  @Output() selectChange = new EventEmitter<Array<any>>();

  deptList: any; // 当前展示的部门列表
  selectedDept: any; // 选中的部门
  parentDeptList: Array<any> = []; // 当前部门的，所有父部门

  constructor(public router: Router, private http: HttpClient, private deptUserService: DeptUserService) {
  }

  // 监听组建输入值的变化
  ngOnChanges() {
    this.parentDeptList = [];
    if (!this.selectedDeptList) {
      this.selectedDeptList = [];

    }

    this.selectedDept = this.rootDept;
    this.parentDeptList.push(this.rootDept);
    this.loadDeptData();
  }

  // 加载部门数据
  loadDeptData() {
    this.deptUserService.getDeptListByParentId(this.selectedDeptId).subscribe((deptList: any) => {
      this.deptList = deptList.list;
      this.synDeptListSelectState();
    });
  }

  // 获取选中的部门id
  get selectedDeptId() {
    let deptId = this.rootDept.deptId;
    if (this.selectedDept) {
      deptId = this.selectedDept.deptId;
    }
    return deptId;
  }

  // 初始化选中效果
  synDeptListSelectState() {
    this.deptList.forEach(item => {
      this.selectedDeptList.forEach(selected => {
        selected.checked = true;
        if (item.deptId === selected.deptId) {
          item.checked = true;
        }
      });
    });
  }

  // 点击部门，加载子部门
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
    this.loadDeptData();
  }

  // 获取 当前是否全选状态
  get isAllDeptChecked() {
    if (this.deptList == null || this.deptList.length === 0) {
      return false;
    }
    let hasNotChecked = true;
    this.deptList.forEach(item => {
      hasNotChecked = hasNotChecked && !item.checked;
    });
    return !hasNotChecked;
  }

  // 选中当前展示的全部部门
  checkAllDept() {
    let b = true;
    if (this.isAllDeptChecked) {
      b = false;
    }
    this.deptList.forEach(item => {
      if (item.checked !== b) {
        // 状态不一致，需要改变状态
        this.changeState(item);
      }
    });
  }

  // 选中，或者取消选中
  changeState(dept) {
    dept.checked = !dept.checked;
    if (dept.checked) {
      // 添加选中
      this.selectedDeptList.push(dept);
    } else {
      // 取消选中
      const newList = [];
      this.selectedDeptList.forEach(item => {
        if (item.deptId !== dept.deptId) {
          newList.push(item);
        }
      });
      this.selectedDeptList = newList;
    }
    // 从选中列表删除时，同步取消左侧人员选中效果。
    this.deptList.forEach(item => {
      if (item.deptId === dept.deptId) {
        item.checked = dept.checked;
      }
    });
    this.selectChange.emit(this.selectedDeptList);
  }

  searchChange(event) {
    const value = event.target.value;
    if (value) {
      this.deptUserService.searchDept(value).subscribe((data: any) => {
        this.deptList = data.list;
        this.synDeptListSelectState();
      });
    } else {
      this.loadDeptData();
    }
  }
}
