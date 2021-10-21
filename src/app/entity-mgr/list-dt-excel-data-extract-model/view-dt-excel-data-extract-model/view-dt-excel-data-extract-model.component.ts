import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonViewComponent} from '@shared-common/view';
import {DtExcelDataExtractModelFieldInfoService} from '../dt-excel-data-extract-model-field-info-service';
import {DtExcelDataExtractModelService} from '../dt-excel-data-extract-model-service';

@Component({
  selector: 'app-view-dt-excel-data-extract-model',
  templateUrl: './view-dt-excel-data-extract-model.component.html',
  styleUrls: ['./view-dt-excel-data-extract-model.component.scss'],
})
export class ViewDtExcelDataExtractModelComponent extends CommonViewComponent {
  @Input() viewDtExcelDataExtractModel: any;

  get viewData() {
    return this.viewDtExcelDataExtractModel;
  }
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: DtExcelDataExtractModelService,
    public fieldInfoService: DtExcelDataExtractModelFieldInfoService,
  ) {
    super();
  }
}
