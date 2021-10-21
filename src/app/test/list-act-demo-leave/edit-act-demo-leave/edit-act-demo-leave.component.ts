import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {ActDemoLeaveFieldInfoService} from '../act-demo-leave-field-info-service';
import {ActDemoLeaveService} from '../act-demo-leave-service';

@Component({
  selector: 'app-edit-act-demo-leave',
  templateUrl: './edit-act-demo-leave.component.html',
  styleUrls: ['./edit-act-demo-leave.component.scss'],
})
export class EditActDemoLeaveComponent extends CommonEditComponent {

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
