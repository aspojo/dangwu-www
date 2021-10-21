import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DtExcelDataExtractModelFieldInfoService} from '../dt-excel-data-extract-model-field-info-service';
import {DtExcelDataExtractModelService} from '../dt-excel-data-extract-model-service';

@Component({
  selector: '[selectDtExcelDataExtractModel]',
  templateUrl: './select-dt-excel-data-extract-model.component.html',
  styleUrls: ['./select-dt-excel-data-extract-model.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDtExcelDataExtractModelComponent, multi: true}
  ],
})
export class SelectDtExcelDataExtractModelComponent extends CommonSelectOne {
  @Input() selectDtExcelDataExtractModel; // 原始选中值
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DtExcelDataExtractModelService,
              public fieldInfoService: DtExcelDataExtractModelFieldInfoService,
    ) {
    super();
  }
}
