import {ApplicationRef, Component, OnDestroy, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {MessageService} from '../../shared/services/message-service';
import {DicService} from '../../shared/services/dic.service';
import {routerTransition} from '../../router.animations';
import {NavigationEnd, Router} from '@angular/router';
import {ITreeOptions, TreeComponent, TreeNode} from 'angular-tree-component';
import {EntityOperator} from '@shared-utils/entity';
import {UtilValidate} from '@shared-utils/validate';

@Component({
  selector: 'app-dic',
  templateUrl: './dic.component.html',
  styleUrls: ['./dic.component.css'],
  animations: [routerTransition()]
})
export class DicComponent implements OnDestroy {
  entityName = 'FadpDic';
  showSortInfo = false;

  newDic: any;


  selectedNode: TreeNode;
  dataList;
  newDataList;

  treeData: any = [];
  treeSettings: ITreeOptions = {
    displayField: 'value'
  };
  @ViewChild('dicTree', {static: false}) dicTree: TreeComponent;
  editDic: any = {};
  routerSubscription;
  searchValue: any;
  searchTreeData: any;

  addRef: NgbModalRef;
  editRef: NgbModalRef;
  public dicIds = [];
  public dicValues = [];
  public currentDicId = '';
  public currentDicValue = '';

  constructor(public router: Router, private http: HttpClient, private modalService: NgbModal, private dicService: DicService
    , private applicationRef: ApplicationRef) {
    this.initNewDic();
    this.routerSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  initNewDic() {
    this.newDic = {isLeaf: 'Y', enabled: 'Y'};
  }

  init() {
    this.selectedNode = null;
    this.loadTreeData();
    this.loadDataByNodeId();
  }

  onNodeSelected(event) {
    this.selectedNode = event.node;
    this.loadDataByNodeId();
  }

  loadDataByNodeId() {
    this.initNewDic();
    let parentId;
    if (this.selectedNode) {
      parentId = this.selectedNode.data.dicId;
      this.newDic.parentId = parentId;
    }
    this.dicService.getDicByParentId(parentId).subscribe(data => {
      this.dataList = data;
    });
  }

  loadTreeData() {
    this.http.post('getDicTreeData', {}).subscribe((treeData: any) => {
      // this.treeData = treeData;
      // this.treeData.settings = {rightMenu: false};
      treeData.children.forEach(item => {
        item.settings = {rightMenu: false, isCollapsedOnInit: false};
      });
      this.treeData = [treeData];
      this.applicationRef.tick();

      this.dicTree.treeModel.expandAll();
      if (this.selectedNode) {
        const node: TreeNode = this.dicTree.treeModel.getNodeById(this.selectedNode.data.dicId);
        node.setActiveAndVisible();
      }
    });
  }

  getNode(id): TreeNode {
    return this.dicTree.treeModel.getNodeById(id);
  }


  validateInfo() {

    const condition = {conditionList: [], operator: EntityOperator.AND};
    condition.conditionList.push({lhs: 'enabled', operator: EntityOperator.EQUALS, rhs: 'Y'});
    condition.conditionList.push({lhs: 'parentId', operator: EntityOperator.EQUALS, rhs: this.selectedNode.id});


    this.http.post('validateInfo', {'entityName': 'FadpDic', 'filedId': 'dicId', 'filedName': 'dicValue', 'condition': condition}).subscribe((data: any) => {
      if (undefined !== data && null !== data) {
        this.dicIds = data.dicId;
        this.dicValues = data.dicValue;
      }
    });
  }

  open(mode, view, data) {
    const ref = this.modalService.open(view);
    if (mode === 'add') {
      this.addRef = ref;
    } else {
      this.editDic = Object.assign({}, data);
      this.editRef = ref;
      this.currentDicId = data.dicId;
      this.currentDicValue = data.dicValue;
    }
    this.validateInfo();
  }

  saveData(mode) {
    if (mode === 'add') {
      this.addDicSave();

    } else {
      this.editDicSave();

    }
  }

  // 添加字典
  addDicSave() {
    const saveData = {
      entityName: this.entityName,
      fieldMap: this.newDic,
      autoPK: true,
    };

    if (undefined !== this.dicIds && null !== this.dicIds && this.dicIds.length > 0) {
      // 验证字典id是否存在
      if (this.dicIds.indexOf(saveData.fieldMap.dicId) > -1) {
        MessageService.showGlobalMessage('danger', '字典id已经存在！');
        return;
      }
    }

    if (undefined !== this.dicValues && null !== this.dicValues && this.dicValues.length > 0) {
      // 验证字典值是否存在
      if (this.dicValues.indexOf(saveData.fieldMap.dicValue) > -1) {
        MessageService.showGlobalMessage('danger', '字典值已经存在！');
        return;
      }
    }

    this.newDic.id = this.newDic.dicId;
    this.http.post('genericSave', saveData).subscribe(data => {
      if (data['error'] == null) {

        this.loadTreeData();
        /*        this.newDic = data;
                if (this.newDic.isLeaf === 'N') {
                  // 向树上添加节点
                  const parentId = this.newDic.parentId;
                  if (parentId == null) {
                    this.selectedNode = this.dicTree.treeModel.roots[0];
                  }
                  this.newDic.value = this.newDic.dicValue;
                  this.selectedNode.data.children.push(this.newDic);
                  this.applicationRef.tick();
                }

                // 向列表添加数据
                this.dataList.push(this.newDic);
                this.newDic = Object.assign({}, this.newDic);*/
      }
    }, error => {
    });
    this.addRef.close();
  }

  deleteDicById(dicId) {
    this.http.post('genericDelete', {
      entityName: this.entityName,
      PK: [{dicId: dicId}]
    }).subscribe(data => {
      if (data['error'] == null) {
        this.loadTreeData();
        // // 删除列表数据
        // const newArr = [];
        // this.dataList.forEach(dataItem => {
        //   if (dataItem.dicId !== dicId) {
        //     newArr.push(dataItem);
        //   }
        // });
        // this.dataList = newArr;
        // // 删除树上节点
        // const node = this.getNode(dicId);
        // if (node) {
        //   node.dispose();
        // }
      }
    });
  }

  editDicSave() {
    const saveData = {
      entityName: this.entityName,
      fieldMap: this.editDic,
      PK: {dicId: this.editDic.dicId}
    };
    if (undefined !== this.dicIds && null !== this.dicIds && this.dicIds.length > 0) {
      if (this.currentDicId !== saveData.fieldMap.dicId) {
        // 验证字典id是否存在
        if (this.dicIds.indexOf(saveData.fieldMap.dicId) > -1) {
          MessageService.showGlobalMessage('danger', '字典id已经存在！');
          return;
        }
      }
    }

    if (undefined !== this.dicValues && null !== this.dicValues && this.dicValues.length > 0) {
      if (this.currentDicValue !== saveData.fieldMap.dicValue) {
        // 验证字典值是否存在
        if (this.dicValues.indexOf(saveData.fieldMap.dicValue) > -1) {
          MessageService.showGlobalMessage('danger', '字典值已经存在！');
          saveData.fieldMap.dicValue = this.currentDicValue;
          return;
        }
      }
    }
    this.http.post('genericSave', saveData).subscribe(data => {
      if (data['error'] == null) {
        MessageService.showGlobalMessage('success', '修改成功！');

        // 更新树
        const oopNodeController = this.getNode(this.editDic.dicId);
        if (oopNodeController) {
          oopNodeController.data.value = this.editDic.dicValue;
        }
        this.loadTreeData();
        // 更新列表数据
      }
    }, error => {
    });
    this.editRef.close();
  }

  toggleEnable() {
    const en = this.editDic.enabled;
    this.editDic.enabled = (en === 'Y' ? 'N' : 'Y');
    this.editDicSave();
  }

  searchChange(event) {
    const value = event.target.value;
    this.searchTreeData = [this.findSubTree(this.treeData[0], value)];
    this.applicationRef.tick();
    this.dicTree.treeModel.expandAll();
  }

  findSubTree(node, str) {
    const children = [];
    if (node.children) {
      node.children.forEach(item => {
        const childNode = this.findSubTree(item, str);
        if (UtilValidate.isNotEmpty(childNode)) {
          children.push(childNode);
        }
      });
    }
    const id = node.id;
    const value = node.value;


    let returnNode: any = {};
    if (id.indexOf(str) > -1 || value.indexOf(str) > -1 || children.length > 0) {
      returnNode = {id: node.id, value: node.value, dicId: node.dicId, dicValue: node.dicValue};
      if (children.length > 0) {
        // 子节点匹配
        returnNode.children = children;
      }
    }
    return returnNode;
  }

  sortClick() {
    this.showSortInfo = true;
    this.newDataList = [];
    this.syncSort(this.dataList, this.newDataList);
  }

  hideSortInfo() {
    this.showSortInfo = false;
  }

  get hasChildren() {
    return (this.dataList != null) && this.dataList.length > 0;
  }

  saveDeptSortClick() {
    this.hideSortInfo();
    // TODO: 向数据库保存排序数据
    this.dicService.saveDicSort(this.newDataList).subscribe((data: any) => {
      if (data['error'] == null) {
        // 更新树显示顺序
        this.loadTreeData();
        this.loadDataByNodeId();
      } else {
        MessageService.showGlobalMessage('danger', '调整失败，错误代码：' + data.error);
      }
    });
  }

  cancelDeptSortClick() {
    this.hideSortInfo();
  }

  syncSort(sourceList, targetList) {
    // 同步排序
    for (let i = 0; i < sourceList.length; i++) {
      targetList[i] = sourceList[i];
    }
  }


}
