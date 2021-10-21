import {Component, OnDestroy, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {environment} from '@environments';
import {Observable} from 'rxjs';
import {MessageService} from '@shared-services/message';
import {routerTransition} from '../../../router.animations';
import {Auth} from '@shared-services/auth';

@Component({
  selector: 'app-entity-edit',
  templateUrl: './entity-edit.component.html',
  styleUrls: ['./entity-edit.component.css'],
  animations: [routerTransition()]
})
export class EntityEditComponent implements OnDestroy {
  entity: any = {};
  @ViewChild('moreInfoView', {static: false}) moreInfoView: TemplateRef<any>;
  moreInfoViewRef: NgbModalRef;

  showSortInfo = false;
  newDataList: any[];
  fieldTemp: any;

  routerSubscription;

  constructor(public router: Router, private http: HttpClient, private modalService: NgbModal
    , public _route: ActivatedRoute) {
    this.routerSubscription = this.router.events.subscribe((e: any) => {
      // 允许跳转相同路由时刷新页面
      if (e instanceof NavigationEnd) {
        this.loadData();
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  loadData() {
    const entityName = this._route.snapshot.paramMap.get('entityName');
    const id = this._route.snapshot.paramMap.get('id');

    this.http.post('getCGTEntityConfig', {entityName: entityName, id: id}).subscribe(data => {
      this.entity = data;
      if (!this.entity.processInstanceKey) {
        this.entity.processInstanceKey = '';
      }
      this.entity.fieldList.forEach(item => {
        // 初始化默认值
        const defaultField = {
          'fieldName': null,
          'isValueField': null,
          'defaultValue': null,
          'description': null,
          'orderNum': null,
          'orderBy': null,
          'dicId': null,
          'required': 'N',
          'relEntityName': null,
          'showInQuery': null,
          'entityName': null,
          'isShowField': null,
          'fieldLabel': '',
          'showInEdit': null,
          'isApproveStateField': null,
          'isViewValue': null,
          'component': null,
          'PK': false,
          'showInView': null,
          'fieldType': null,
          'showInTable': null,
          'checked': false
        };
        const fullItem = Object.assign(defaultField, item);
        Object.assign(item, fullItem);
      });
    });
  }

  sortClick() {
    this.entity.showSortInfo = true;
    this.newDataList = [];
    this.syncSort(this.entity.fieldList, this.newDataList);
  }

  hideSortInfo() {
    this.entity.showSortInfo = false;
  }


  saveDeptSortClick() {
    this.newDataList.forEach((item, index) => {
      item.orderNum = (100 + index) + '';
    });
    this.hideSortInfo();
    this.syncSort(this.newDataList, this.entity.fieldList);
  }

  saveData() {
    this.saveDataObservable().subscribe();
  }

  saveDataObservable(): Observable<any> {
    const observable = new Observable(observer => {
      const submitData = {id: this.entity.id, entityName: this.entity.entityName, description: this.entity.description, config: JSON.stringify(this.entity)};
      this.http.post('genericSave', {
        entityName: 'CGTEntityConfig',
        autoPK: true,
        fieldMap: submitData
      }).subscribe((data: any) => {
        if (data['error'] == null) {
          MessageService.showGlobalMessage('success', '保存成功！');
          this.entity.id = data.value.id;
          this.loadDataList();
          observer.next();
        }
      });
    });

    return observable;
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

  exportCURDCode() {
    if (undefined === this.entity.id || '' === this.entity.id) {
      MessageService.showGlobalMessage('danger', '请先点击保存修改按钮！');
      return;
    } else {
      window.open(environment.serverUrl + 'exportCURDCode?id=' + this.entity.id + `&t=${new Date().getTime()};jsessionid='` + Auth.userData.jsessionid);
    }

    // this.saveDataObservable().subscribe(data => {
    //   window.open(environment.serverUrl + 'exportCURDCode?entityName=' + this.entity.entityName);
    // });
  }

  editAll(param2: any) {
    if (this.checkedNum > 0) {
      this.entity.fieldList.forEach(field => {
          if (field.checked) {
            Object.assign(field, param2);
          }
        }
      );
    } else {
      MessageService.showGlobalMessage('danger', '请选择');
    }
  }

  showMoreInfo(data) {
    this.fieldTemp = data;
    this.moreInfoViewRef = this.modalService.open(this.moreInfoView, {size: 'lg'});
  }

  componentChange() {
    this.fieldTemp.dicId = null;
    this.fieldTemp.relEntityName = null;
  }


  // +++++++++++++++++++++++++++++++选择表数据开始++++++++++++++++++

  // 全选
  checkAll() {
    const b = !this.isAllChecked;
    this.entity.fieldList.forEach((item: any) => {
      item.checked = b;
    });
  }

  // 是否全选
  get isAllChecked() {
    return (this.entity.fieldList != null) && (this.entity.fieldList.length > 0) && (this.checkedNum === this.entity.fieldList.length);
  }

  // 选中数目
  get checkedNum() {
    let checkedNum = 0;
    if (this.entity.fieldList) {
      this.entity.fieldList.forEach((item: any) => {
        checkedNum += (item.checked ? 1 : 0);
      });
    }
    // this.isAllChecked = (this.checkedNum === this.peopleList.length);
    return checkedNum;
  }

  private loadDataList() {

  }
}
