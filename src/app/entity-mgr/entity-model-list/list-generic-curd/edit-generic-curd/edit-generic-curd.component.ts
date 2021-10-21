import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {GenericCurdFieldInfoService} from '../generic-curd-field-info-service';
import {GenericCurdService} from '../generic-curd-service';

@Component({
  selector: 'app-edit-generic-curd',
  templateUrl: './edit-generic-curd.component.html',
  styleUrls: ['./edit-generic-curd.component.scss'],
})
export class EditGenericCurdComponent extends CommonEditComponent implements OnInit {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: GenericCurdService,
    public fieldInfoService: GenericCurdFieldInfoService,
  ) {
    super();
  }


}
