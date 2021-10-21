import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {ActDemoLeaveFieldInfoService} from '../act-demo-leave-field-info-service';
import {ActDemoLeaveService} from '../act-demo-leave-service';

@Component({
  selector: 'app-view-act-demo-leave',
  templateUrl: './view-act-demo-leave.component.html',
  styleUrls: ['./view-act-demo-leave.component.scss'],
})
export class ViewActDemoLeaveComponent extends CommonViewComponent {
  @Input() viewActDemoLeave: any;

  get viewData() {
    return this.viewActDemoLeave;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: ActDemoLeaveService,
    public fieldInfoService: ActDemoLeaveFieldInfoService,
  ) {
    super();
  }
}
