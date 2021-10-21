import {Component, OnInit} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GenericCurdFieldInfoService} from './generic-curd-field-info-service';
import {GenericCurdService} from './generic-curd-service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-list-generic-curd',
  templateUrl: './list-generic-curd.component.html',
  styleUrls: ['./list-generic-curd.component.scss'],
  animations: [routerTransition()]
})
export class ListGenericCurdComponent extends CommonDataTable implements OnInit {

  public asApplication = false;

  // 单独作为一个应用

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: GenericCurdService,
    public fieldInfoService: GenericCurdFieldInfoService,
    public route: ActivatedRoute,
    private router: Router,
  ) {
    super();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hasInited = false;
        this.init();
      }

    });
  }

  ngOnInit(): void {
  }

  init() {
    // 先取出url上的参数
    this.fieldInfoService.dataSourceName = this.route.snapshot.paramMap.get('dataSourceName');
    this.fieldInfoService.entityName = this.route.snapshot.paramMap.get('entityName');
    this.asApplication = this.route.snapshot.paramMap.get('asApplication') === 'true';
    this.hasBackButton = !this.asApplication;
    // 从服务器获取字段信息
    this.pageData = {};
    this.fieldInfoService.init().subscribe(value => {
      super.init();
    });
  }


  fieldInfoSaved($event: any) {
    this.fieldInfoService.superInit();
    this.loadDataList();
  }

  get heading() {
    if (this.asApplication) {
      if (this.fieldInfoService.entityDescription !== 'None') {
        return this.fieldInfoService.entityDescription;
      }
      return '';
    } else {
      return this.fieldInfoService.entityName + '--' + this.fieldInfoService.entityDescription;
    }

  }
}
