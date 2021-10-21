import {Component, OnDestroy, OnInit} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments';
import {UtilHttp} from '@shared-utils/http';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-entity-model-list',
  templateUrl: './entity-model-list.component.html',
  styleUrls: ['./entity-model-list.component.css'],
  animations: [routerTransition()]

})
export class EntityModelListComponent implements OnInit, OnDestroy {
  searchValue: any;
  dataSourceList: Array<any>;
  entityModelList: Array<any>;

  currentDataSourceName;
  dataSourceMenuData: any = [{label: '新建表'}];
  private routerSubscription: Subscription;

  constructor(private http: HttpClient,
              public route: ActivatedRoute,
              public router: Router,
  ) {
    this.routerSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

  }

  ngOnInit() {
    this.currentDataSourceName = this.route.snapshot.paramMap.get('dataSourceName');
    this.loadDataSourceList();

  }

  loadDataSourceList() {
    this.http.post('getPageData', {entityName: 'DatabaseSeq', condition: {}}).subscribe((data: any) => {
      // 使系统数据库排在第一位
      const arr = [];
      arr.push({dataSourceName: 'default', 'description': '系统数据库'});
      this.dataSourceList = arr.concat(data.list.filter((item: any) => {
        return item.dataSourceName !== 'default';
      }));
      this.loadEntityModelList(this.currentDataSourceName);
    });
  }

  loadEntityModelList(dataSourceName) {
    this.currentDataSourceName = dataSourceName;
    this.http.post('getEntityModelList', {dataSourceName: dataSourceName}).subscribe((data: any) => {
      this.entityModelList = data.list;
      this.searchChange();
    });
  }

  searchChange() {
    const list = [];
    this.entityModelList.forEach(dataItem => {
      const v1 = dataItem.entityName.toLowerCase();
      const v2 = dataItem.description ? dataItem.description : '';
      if (this.searchValue) {
        const sv = this.searchValue.toLocaleString();
        if (v1.indexOf(sv) > -1 || v2.indexOf(sv) > -1) {
          dataItem.show = true;
        } else {
          dataItem.show = false;
        }
      } else {
        dataItem.show = true;
      }
    });

  }


  // 导入数据
  importData(dataSourceName) {
    alert(dataSourceName);
  }

  // 导出数据
  getXmlDownLoadUrl() {
    if (this.checkedNum === 0) {
      return 'javascript:void(0)';
    }
    return environment.serverUrl + 'XMLDownLoad?dataSourceName=' + this.currentDataSourceName + '&entityNameList=' + this.checkedTable.join(',');
  }

  // 删除表
  deleteEntityModel() {
    this.http.post('deleteEntityModel', {dataSourceName: this.currentDataSourceName, entityNameList: this.checkedTable}).subscribe(value => {
      if (UtilHttp.notHasError(value)) {
        this.loadEntityModelList(this.currentDataSourceName);
      }
    });
  }

  // +++++++++++++++++++++++++++++++选择表数据开始++++++++++++++++++
  get checkedTable() {
    return this.entityModelList.filter(value => value.checked).map(value => value.entityName);
  }

  // 选择表数据
  checkItem(item) {
    item.checked = !item.checked;
  }

  // 全选
  checkAll() {
    const b = !this.isAllChecked;
    this.entityModelList.forEach((item: any) => {
      item.checked = b;
    });
  }

  // 是否全选
  get isAllChecked() {
    return (this.entityModelList != null) && (this.entityModelList.length > 0) && (this.checkedNum === this.entityModelList.length);
  }

  // 选中数目
  get checkedNum() {
    let checkedNum = 0;
    if (this.entityModelList) {
      this.entityModelList.forEach((item: any) => {
        checkedNum += (item.checked ? 1 : 0);
      });
    }
    return checkedNum;
  }


  gotoDataSource(dataSourceName: any) {
    this.router.navigate(['entityMgr/entityModelList/' + dataSourceName]);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
