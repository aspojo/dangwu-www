import {Component, OnInit} from '@angular/core';
// import {routerTransition} from '@app';
import {MessageService} from '@shared-services/message';
import {ComponentMapService} from '@config';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonDataTable} from '@shared-common/data-table';
import {DemoOrderService} from '../../demo/list-demo-order/demo-order-service';
import {DemoOrderFieldInfoService} from '../../demo/list-demo-order/demo-order-field-info-service';

@Component({
  selector: 'app-use-code-tool-pro',
  templateUrl: './use-code-tool-pro.component.html',
})
export class UseCodeToolProComponent extends CommonDataTable {
  selectedDemoOrder: any; // 选中订单

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DemoOrderService,
    public fieldInfoService: DemoOrderFieldInfoService) {
    super();
  }

  // 订单数据保存事件
  demoOrderSavedEvent(data) {
    MessageService.showGlobalMessage('success', '保存完成');
  }
}
