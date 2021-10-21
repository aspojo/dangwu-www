import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {CommonViewBaseInfo} from '@shared-common/view';
import {DtExcelDataExtractModelFieldInfoService} from '../../dt-excel-data-extract-model-field-info-service';
import {DtExcelDataExtractModelService} from '../../dt-excel-data-extract-model-service';


@Component({
  selector: 'app-view-dt-excel-data-extract-model-base-info',
  templateUrl: './view-dt-excel-data-extract-model-base-info.component.html',
})
export class ViewDtExcelDataExtractModelBaseInfoComponent extends CommonViewBaseInfo {
  private fieldColInfo: any;
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public route: ActivatedRoute,
              public commonService: DtExcelDataExtractModelService,
              public fieldInfoService: DtExcelDataExtractModelFieldInfoService,
  ) {
    super();
  }
}
