import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DtExcelTemplateFileFieldInfoService} from '../dt-excel-template-file-field-info-service';
import {DtExcelTemplateFileService} from '../dt-excel-template-file-service';

@Component({
  selector: '[selectDtExcelTemplateFile]',
  templateUrl: './select-dt-excel-template-file.component.html',
  styleUrls: ['./select-dt-excel-template-file.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDtExcelTemplateFileComponent, multi: true}
  ],
})
export class SelectDtExcelTemplateFileComponent extends CommonSelectOne {
  @Input() selectDtExcelTemplateFile; // 原始选中值
  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DtExcelTemplateFileService,
              public fieldInfoService: DtExcelTemplateFileFieldInfoService,
    ) {
    super();
  }
}
