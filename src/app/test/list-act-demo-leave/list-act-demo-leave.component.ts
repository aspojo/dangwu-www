import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActDemoLeaveFieldInfoService} from './act-demo-leave-field-info-service';
import {ActDemoLeaveService} from './act-demo-leave-service';

@Component({
  selector: 'app-list-act-demo-leave',
  templateUrl: './list-act-demo-leave.component.html',
  styleUrls: ['./list-act-demo-leave.component.scss'],
  animations: [routerTransition()]
})
export class ListActDemoLeaveComponent extends CommonDataTable {
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: ActDemoLeaveService,
    public fieldInfoService: ActDemoLeaveFieldInfoService,
  ) {
    super();
  }

}
