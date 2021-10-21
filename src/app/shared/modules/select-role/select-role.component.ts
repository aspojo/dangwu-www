import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {DeptUserService} from '../../services/dept-user.service';
import {MessageService} from '../../services/message-service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonFormInput} from '../../common/common-form-input';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {EntityOperator} from '@shared-utils/entity';

@Component({
  selector: '[selectRole]',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectRoleComponent, multi: true}
  ],
})
export class SelectRoleComponent extends CommonFormInput<any> implements OnChanges, OnInit {

  @Input() selectRole: Array<any> | any;
  @Input() groupType: any;
  @Input() groupName: any;
  @Input() rootDept: any;
  @Input() selectOne = true; // 只选择一个值
  @Output() selectedEvent = new EventEmitter<Array<any> | any>();
  @Input() showResultAndSearchButton = true; // 默认显示选中结果和搜索按钮


  deptList: any;
  selectedDept: any;
  groupList: Array<any> = [];
  parentDeptList: Array<any> = [];
  selectedGroupList: Array<any> = [];
  @ViewChild('selectView', {static: false}) selectView: TemplateRef<any>;
  selectRef: NgbModalRef;

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
    if (this.value && this.selectedGroupList.length === 0) {
      // 第一次绑定，做初始化操作
      let list;
      if (this.value instanceof Array) {
        list = this.value;
      } else {
        this.groupName = this.groupName || this.value;
        list = [{groupId: this.value, groupName: this.groupName, checked: true}];
      }
      this.selectedGroupList = list;
    }
  }

  ngOnChanges() {
    this.loadData();

  }

  get selectedDeptId() {
    let deptId = this.rootDept.deptId;
    if (this.selectedDept) {
      deptId = this.selectedDept.deptId;
    }
    return deptId;
  }

  loadData() {
    this.http.post('getPageData', {
      entityName: 'SecurityGroup',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      condition: {lhs: 'groupType', operator: EntityOperator.EQUALS, rhs: this.groupType}
    }).subscribe((data: any) => {
      this.groupList = data.list;
      this.synGroupListSelectState();

    });
  }

  synGroupListSelectState() {
    // 初始化人员选中效果
    this.groupList.forEach(item => {
      this.selectedGroupList.forEach(selected => {
        if (item.groupId && (item.groupId === selected.groupId)) {
          item.checked = true;
        }
      });
    });
  }



  get isAllChecked() {
    if (this.groupList == null || this.groupList.length === 0) {
      return false;
    }
    let hasNotChecked = true;
    this.groupList.forEach(item => {
      hasNotChecked = hasNotChecked && !item.checked;
    });
    return !hasNotChecked;
  }

  checkAll() {
    let b = true;
    if (this.isAllChecked) {
      b = false;
    }
    this.groupList.forEach(item => {
      if (item.checked !== b) {
        // 状态不一致，需要改变状态
        this.changeSelect(item);
      }
    });
  }

  // 选中，或者取消选中
  changeSelect(group) {
    group.checked = !group.checked;
    if (group.checked) {
      // 添加选中
      this.selectedGroupList.push(group);
    } else {
      const newList = [];
      this.selectedGroupList.forEach(item => {
        if (item.groupId !== group.groupId) {
          newList.push(item);
        }
      });
      this.selectedGroupList = newList;
    }
    if (this.selectedGroupList.length === 0) {
      this.value = 'null';
      this.selectedEvent.emit(null);
    }
    // 从选中列表删除时，同步取消左侧选中效果。
    this.groupList.forEach(item => {
      if (item.groupId === group.groupId) {
        item.checked = group.checked;
      }
    });
  }

  clickOk() {
    if (this.selectedGroupList.length === 0) {
      MessageService.showGlobalMessage('danger', '请选择');
    } else {
      if (this.selectOne) {
        if (this.selectedGroupList.length !== 1) {
          MessageService.showGlobalMessage('danger', '仅可选择一个角色');
        } else {
          const groupData: any = this.selectedGroupList[0];
          this.value = groupData.groupId;
          this.selectedEvent.emit(groupData);
          this.selectRef.close();
        }
      } else {
        this.selectedEvent.emit(this.selectedGroupList);
        this.selectRef.close();
      }
    }
  }


}
