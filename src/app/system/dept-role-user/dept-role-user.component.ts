import {ApplicationRef, Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {DeptUserService} from '../../shared/services/dept-user.service';
import {MessageService} from '../../shared/services/message-service';
import {HttpClient} from '@angular/common/http';
import {DicService} from '../../shared/services/dic.service';
import {EntityOperator} from '@shared-utils/entity';
import {ITreeOptions, TreeComponent, TreeNode} from 'angular-tree-component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dept-role-user',
  templateUrl: './dept-role-user.component.html',
  styleUrls: ['./dept-role-user.component.scss'],
  animations: [routerTransition()]

})
export class DeptRoleUserComponent implements OnInit {
  searchData: any = {signType: 'dept'};
  showSortInfo = false;
  selectedDept: any;
  selectedRole: any;
  newChildDeptList: any;
  treeData = [];
  roleTreeData = [];
  treeSettings: ITreeOptions = {
    displayField: 'value'
  };
  @ViewChild('deptTreeComponent', {static: false}) deptTreeComponent: TreeComponent;
  @ViewChild('roleTreeComponent', {static: false}) roleTreeComponent: TreeComponent;
  @ViewChild('addDeptView', {static: false}) addDeptView: any;
  addDeptModalRef: NgbModalRef;
  newDept: any;

  roleTypeList: any;
  rootDept: any;
  inEdit: boolean;

  searchResult: any = {searchValue: null, deptList: null, userList: null};
  public deptIds = [];
  public deptNames = [];
  public currentDeptId = '';
  public currentDeptName = '';

  searchFun: any; // 延迟搜索
  constructor(private http: HttpClient, private deptUserService: DeptUserService, private dicService: DicService
    , private applicationRef: ApplicationRef, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.loadTreeData();
    this.initNewDept();
    this.loadRoleTypeData();
  }

  loadRoleTypeData() {
    this.dicService.getDicEnabled('roleType').subscribe(dicDataList => {
      this.roleTypeList = dicDataList;
      this.loadRoleTreeData();
    });
  }

  loadRoleTreeData() {
    const groupTypeList = this.roleTypeList.map(item => {
      return item.dicId;
    });
    this.http.post('getPageData', {
      entityName: 'SecurityGroup',
      viewSize: 100000,
      viewIndex: 0,
      noConditionFind: 'Y',
      hasTimestamp: 'N',
      condition: {lhs: 'groupType', operator: EntityOperator.IN, rhs: groupTypeList}
    }).subscribe(data => {
      const childList = [];
      const mapping: any = {};
      this.roleTypeList.map((item, i) => {
        const node = {id: item.dicId, value: item.dicValue, children: [], settings: {selectionAllowed: false}};
        childList.push(node);
        mapping[item.dicId] = node;
      });
      const list = data['list'];
      list.forEach(item => {
        item.id = item.groupId;
        item.value = item.groupName;
        mapping[item.groupType].children.push(item);
      });
      this.roleTreeData = childList;
      this.applicationRef.tick();
      this.roleTreeComponent.treeModel.expandAll();
    });
  }

  initNewDept() {
    this.newDept = {enabled: 'Y'};
  }

  loadTreeData() {
    this.selectedDept = null;
    this.deptUserService.getDeptTreeData().subscribe((treeData: any) => {
      this.rootDept = treeData;
      this.treeData = [treeData];
      this.applicationRef.tick();
      this.deptTreeComponent.treeModel.expandAll();
      this.deptTreeComponent.treeModel.roots[0].setActiveAndVisible();

    });
  }


  handleCreated(event) {
    // console.log(event);
    this.onNodeSelected(event);
  }

  onNodeSelected(event) {
    this.selectedDept = event.node;
    this.newChildDeptList = [];
    if (this.selectedDept.data.children) {
      this.selectedDept.data.children.forEach(item => {
        this.newChildDeptList.push(item);
      });
    }
  }

  onRoleNodeSelected(event) {
    this.selectedRole = event.node.data;
  }

  activate(event) {
    this.selectedDept = event.node;
    this.newChildDeptList = [];
    if (this.selectedDept.data.children) {
      this.selectedDept.data.children.forEach(item => {
        this.newChildDeptList.push(item);
      });
    }
  }


  // 获取已经存在的部门编号和名称
  validateInfo() {

    const condition = {conditionList: [], operator: EntityOperator.AND};
    condition.conditionList.push({lhs: 'enabled', operator: EntityOperator.EQUALS, rhs: 'Y'});


    this.http.post('validateInfo', {'entityName': 'Department', 'filedId': 'deptId', 'filedName': 'deptName', 'condition': condition}).subscribe((data: any) => {
      if (undefined !== data && null !== data) {
        this.deptIds = data.deptId;
        this.deptNames = data.deptName;
      }
      // console.log(data);
    });
  }


  addDeptClick() {
    this.inEdit = false;
    this.initNewDept();
    // 添加parentId
    this.newDept.parentId = this.selectedDept.id;
    // 添加序号
    if (this.selectedDept.data.children) {
      this.newDept.orderNum = this.selectedDept.data.children.length + '';
    }
    this.addDeptModalRef = this.modalService.open(this.addDeptView);
    this.validateInfo();
  }

  editDeptClick() {
    this.inEdit = true;
    this.newDept = Object.assign({}, this.selectedDept.data);
    this.addDeptModalRef = this.modalService.open(this.addDeptView, {size: 'lg'});

    this.currentDeptId = this.newDept.deptId;
    this.currentDeptName = this.newDept.deptName;

    this.validateInfo();
  }

  // 添加部门
  addDeptSave() {
    const saveData = {
      entityName: 'Department',
      fieldMap: this.newDept,
      autoPK: true
    };

    if (undefined !== this.deptIds && null !== this.deptIds && this.deptIds.length > 0) {
      if (this.currentDeptId !== saveData.fieldMap.deptId) {
        // 验证部门编号是否存在
        if (this.deptIds.indexOf(saveData.fieldMap.deptId) > -1) {
          MessageService.showGlobalMessage('danger', '部门编号已经存在！');
          return;
        }
      }
    }
    if (undefined !== this.deptNames && null !== this.deptNames && this.deptNames.length > 0) {
      if (this.currentDeptName !== saveData.fieldMap.deptName) {
        // 验证部门名称是否存在
        if (this.deptNames.indexOf(saveData.fieldMap.deptName) > -1) {
          MessageService.showGlobalMessage('danger', '部门名称已经存在！');
          if (this.inEdit) {
            saveData.fieldMap.deptName = this.currentDeptName;
          }
          return;
        }
      }
    }

    this.http.post('genericSave', saveData).subscribe((data: any) => {
      if (data['error'] == null) {
        this.loadTreeData();
        /* // 向树上添加节点
         this.newDept = data.value;
         this.newDept.id = this.newDept.deptId;
         this.newDept.value = this.newDept.deptName;
         this.selectedDept.addChild(new Tree(this.newDept));
         // 向列表添加数据
         this.newChildDeptList = this.selectedDept.data.children;*/
      }
    });
    this.addDeptModalRef.close();
  }

  deleteDeptById(deptId) {
    this.http.post('genericDelete', {
      entityName: 'Department',
      PK: [{deptId: deptId}]
    }).subscribe(data => {
      if (data['error'] == null) {
        this.loadTreeData();
        /*  // 删除列表数据
          const newArr = [];
          this.newChildDeptList.forEach(dataItem => {
            if (dataItem.deptId !== deptId) {
              newArr.push(dataItem);
            }
          });
          this.newChildDeptList = newArr;
          // 删除树上节点
          const oopNodeController = this.deptTreeComponent.getControllerByNodeId(deptId);
          oopNodeController.remove();*/
      }
    });
    this.addDeptModalRef.close();
  }


  search() {

  }

  searchChange(event) {
    clearTimeout(this.searchFun);
    this.searchResult.deptList = [];
    this.searchResult.userList = [];
    this.searchFun = setTimeout(() => {
      const value = event.target.value;
      if (value) {
        this.deptUserService.searchDept(value).subscribe((data: any) => {
          this.searchResult.deptList = data.list;
        });
        this.deptUserService.searchUser(value).subscribe((data: any) => {
          this.searchResult.userList = data.list;
        });
      }
    }, 1000);
  }

  searchDeptClick(dept) {
    dept.id = dept.deptId;
    dept.value = dept.deptName;
    this.deptUserService.getDeptListByParentId(dept.deptId).subscribe(list => {
      dept.children = list;
    });
    const node: TreeNode = this.deptTreeComponent.treeModel.getNodeById(dept.id);
    node.expand();
    node.setActiveAndVisible();
  }

  sortDeptClick() {
    this.showSortInfo = true;
  }

  saveDeptSortClick() {
    this.hideSortInfo();
    // TODO: 向数据库保存排序数据
    this.deptUserService.saveDeptSort(this.newChildDeptList).subscribe((data: any) => {
      if (data['error'] == null) {
        // 更新树显示顺序
        this.loadTreeData();
        // this.syncSort(this.newChildDeptList, this.selectedDept.data.children);
      } else {
        // 还原子部门列表排序
        this.syncSort(this.selectedDept.data.children, this.newChildDeptList);
        MessageService.showGlobalMessage('danger', '调整失败，错误代码：' + data.error);

      }
    });
  }


  cancelDeptSortClick() {
    this.hideSortInfo();
    // 还原子部门列表排序
    this.syncSort(this.selectedDept.data.children, this.newChildDeptList);
  }

  syncSort(sourceList, targetList) {
    // 同步排序
    for (let i = 0; i < sourceList.length; i++) {
      targetList[i] = sourceList[i];
    }
  }

  hideSortInfo() {
    this.showSortInfo = false;
  }

  get hasChildren() {
    return (this.newChildDeptList != null) && this.newChildDeptList.length > 0;
  }

  selectChange(selectedDeptList) {
    // console.log(selectedDeptList);
  }

  searchUserChange(item, event) {
    Object.assign(item, event);
  }

  validateForm() {
    const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');

    if (!reg.test(this.newDept.deptId)) {
      return false;
    } else {
      return true;
    }

  }
}
