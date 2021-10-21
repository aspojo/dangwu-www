import {ApplicationRef, Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ITreeOptions, TreeComponent, TreeModel, TreeNode} from 'angular-tree-component';
import {ConditionExpr} from '@shared-utils/entity';

@Component({
  selector: 'app-general-party-tree',
  templateUrl: './general-party-tree.component.html',
  styleUrls: ['./general-party-tree.component.css'],
})
export class GeneralPartyTreeComponent implements OnChanges {
  @Input() entityName;
  @Input() treeTitle;
  @Input() idField;
  @Input() parentField;
  @Input() valueField;
  @Output() nodeSelectEvent = new EventEmitter();
  @Input() condition: ConditionExpr;
  @Input() conditionCount: ConditionExpr;
  @Input() type;
  @Input() orderBy;
  @Input() generalId;
  @Input() viewPermissions;

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

  constructor(public router: Router, private http: HttpClient, private applicationRef: ApplicationRef) {
  }

  ngOnChanges() {
    this.selectedNode = null;
    this.loadTreeData();
  }

  onNodeSelected(event) {
    this.selectedNode = event.node;
    // TODO: nodeSelectEvent 触发节点选中事件
    this.nodeSelectEvent.emit(this.selectedNode.data);
  }

  loadTreeData() {
    this.http.post('getGeneralPartyTree', {
      condition: this.condition,
      countCondition: this.conditionCount,
      type: this.type,
      orderBy: this.orderBy,
      generalId: this.generalId,
      viewPermissions: this.viewPermissions
    }).subscribe((treeData: any) => {
      treeData.value = this.treeTitle;
      treeData.isExpanded = true;
      this.treeData = [treeData];
      this.applicationRef.tick();

      // this.dicTree.treeModel.expandAll();
      if (this.selectedNode) {
        const node: TreeNode = this.dicTree.treeModel.getNodeById(this.selectedNode.data.dicId);
        node.setActiveAndVisible();
      }
    });
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
        if (childNode) {
          children.push(childNode);
        }
      });
    }
    const id = node.id;
    const value = node.value;


    let returnNode = null;
    if (id.indexOf(str) > -1 || value.indexOf(str) > -1 || children.length > 0) {
      returnNode = {id: node.id, value: node.value, dicId: node.dicId, dicValue: node.dicValue};
      if (children.length > 0) {
        // 子节点匹配
        returnNode.children = children;
      }
    }
    return returnNode;
  }


  get hasChildren() {
    return (this.dataList != null) && this.dataList.length > 0;
  }

  onUpdateData() {
    const treeModel: TreeModel = this.dicTree.treeModel;
    const firstNode: TreeNode = treeModel.getFirstRoot();
    firstNode.expand();
  }
}
