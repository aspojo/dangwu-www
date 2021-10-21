import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EntityFieldValidate} from '@shared-utils/entity';
import {EnvironmentService} from '@shared-services/environment';
import {MessageService} from '@shared-services/message';
import {UtilValidate} from '@shared-utils/validate';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {DtDataTransferModelFieldInfoService} from '../dt-data-transfer-model-field-info-service';
import {DtDataTransferModelService} from '../dt-data-transfer-model-service';

@Component({
  selector: 'app-edit-dt-data-transfer-model',
  templateUrl: './edit-dt-data-transfer-model.component.html',
  styleUrls: ['./edit-dt-data-transfer-model.component.scss'],
})
export class EditDtDataTransferModelComponent extends CommonEditComponent {
  entityModelList: Array<any>;
  formPart: String = 'p1'; // 表单块号
  fieldList: Array<any>; // 字段列表
  extractModelHeader: Array<any>; // 抽取模型表头

  // 实体列表
  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public commonService: DtDataTransferModelService,
    public fieldInfoService: DtDataTransferModelFieldInfoService,
  ) {
    super();
  }


  afterInit() {
    if (this.inCreate) {
      this.editDataTemp.fieldMapping = {};
    } else {
      this.onDataSourceChange(null);
    }
  }

  // 改变数据源后加载该数据源下的表
  onDataSourceChange(event) {
    if (UtilValidate.isNotEmpty(this.editDataTemp.saveDatasource)) {
      this.http.post('getEntityModelList', {dataSourceName: this.editDataTemp.saveDatasource}).subscribe((data: any) => {
        this.entityModelList = data.list;
      });
    }
  }

  // 进行上一步或下一步
  changeFormPart() {
    if (this.formPart === 'p1') {
      const validate: EntityFieldValidate = this.fieldInfoService.validateGenericValue(this.editDataTemp);
      if (validate.valid
        && this.entityModelList.some(item => item.entityName === this.editDataTemp.saveModelId)// 确保存储模型属于存储数据源
      ) {
        this.formPart = 'p2';

        // 获取抽取模型表头
        this.http.post('getExcelExtractModelHeader', {extractModelId: this.editDataTemp.extractModelId}).subscribe((data: any) => {
          this.extractModelHeader = data.list;
          // 获取存储模型字段信息
          this.http.post('getModelFieldList', {dataSourceName: this.editDataTemp.saveDatasource, entityName: this.editDataTemp.saveModelId}).subscribe((data: any) => {
            this.fieldList = data.list;
            this.fieldList.forEach((item) => {
              if (UtilValidate.isEmpty(this.editDataTemp.fieldMapping[item.fieldName])) {
                this.editDataTemp.fieldMapping[item.fieldName] = {description: item.description};
              }
            });
          });
        });
      } else {
        MessageService.showGlobalMessage('danger', '数据填写有误');
      }
    } else {
      this.formPart = 'p1';

    }
  }

  extractFieldChange($event: any, field: any) {
    if ($event) {
      this.editDataTemp.fieldMapping[field.fieldName].defaultValue = null;
    }
  }
}
