import {ApplicationRef, Component, OnDestroy, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DicService} from '../../shared/services/dic.service';
import {routerTransition} from '../../router.animations';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-code-tool',
  templateUrl: './code-tool.component.html',
  styleUrls: ['./code-tool.component.css'],
  animations: [routerTransition()]
})
export class CodeToolComponent implements OnDestroy {
  @ViewChild('moreInfoView', {static: false}) moreInfoView: TemplateRef<any>;

  showSortInfo = false;

  dataList: any = [];
  routerSubscription;
  searchValue: any;


  constructor(public router: Router, private http: HttpClient, private modalService: NgbModal, private dicService: DicService
    , private applicationRef: ApplicationRef) {
    this.routerSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.loadDataList();
      }
    });
  }

  loadDataList() {
    this.http.get('getAllEntityInfo').subscribe(data => {
      this.dataList = data;
      this.searchChange();
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  searchChange() {
    const list = [];

    this.dataList.forEach(dataItem => {
      const v1 = dataItem.entityName.toLowerCase();
      const v2 = dataItem.entityDescription ? dataItem.entityDescription : '';
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


  // +++++++++++++++++++++++++++++++选择表数据开始++++++++++++++++++


}
