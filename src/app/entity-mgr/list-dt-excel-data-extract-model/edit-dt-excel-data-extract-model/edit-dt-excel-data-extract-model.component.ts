import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EntityFieldValidate} from '@shared-utils/entity';
import {EnvironmentService} from '@shared-services/environment';
import {UtilValidate} from '@shared-utils/validate';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {DtExcelDataExtractModelFieldInfoService} from '../dt-excel-data-extract-model-field-info-service';
import {DtExcelDataExtractModelService} from '../dt-excel-data-extract-model-service';

@Component({
  selector: 'app-edit-dt-excel-data-extract-model',
  templateUrl: './edit-dt-excel-data-extract-model.component.html',
  styleUrls: ['./edit-dt-excel-data-extract-model.component.scss'],
})
export class EditDtExcelDataExtractModelComponent extends CommonEditComponent {
  get defaultCol() {
    return {dataPosition: '居右'};
  }

  fieldColInfo: Array<any> = [this.defaultCol, this.defaultCol, this.defaultCol];
  fieldColInfo2: any = {};
  testData = {header: null, data: null};

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

  afterGetOne() {
    if (this.isFormType) {
      this.fieldColInfo = this.editDataTemp.fieldColInfo;
    } else {
      this.fieldColInfo2 = this.editDataTemp.fieldColInfo;
    }

  }

  afterInit() {
    if (this.inCreate) {
      this.editDataTemp.modelType = this.commonService.modelTypeForm;
    }
  }

  beforeValidateAndFormat() {
    if (UtilValidate.isNotEmpty(this.fieldColInfo)) {
      this.formatFieldColInfo();
    }
  }

  formatFieldColInfo() {
    if (this.isFormType) {
      this.editDataTemp.fieldColInfo = this.fieldColInfo;
    } else {
      this.editDataTemp.fieldColInfo = this.fieldColInfo2;
    }
  }

  beforeSubmit(validate: EntityFieldValidate) {
    let hasError = false;
    if (this.isFormType) {
      this.fieldColInfo.forEach(value => {
        if (UtilValidate.isEmpty(value.sheet) || UtilValidate.isEmpty(value.row) || UtilValidate.isEmpty(value.col)) {
          hasError = true;
        }
      });
    } else {
      if (UtilValidate.isEmpty(this.fieldColInfo2.sheet) || UtilValidate.isEmpty(this.fieldColInfo2.row) || UtilValidate.isEmpty(this.fieldColInfo2.startCol) || UtilValidate.isEmpty(this.fieldColInfo2.endCol)) {
        hasError = true;
      }
    }
    if (hasError) {
      validate.addError('【字段单元格配置】不完整');
    }
  }

  get isFormType() {
    return this.editDataTemp.modelType === this.commonService.modelTypeForm;
  }


  addRow() {
    this.fieldColInfo.push(this.defaultCol);
  }

  removeRow(item: any) {
    this.fieldColInfo = this.fieldColInfo.filter((value => item !== value));
  }

  // 提取测试
  excelExtractTest() {
    this.formatFieldColInfo();
    this.http.post('excelExtractTest', {fieldInfo: this.editDataTemp}).subscribe((data: any) => {
      this.testData = data;
    });
  }
}
