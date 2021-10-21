import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MessageService} from '@shared-services/message';
import {UtilHttp} from '@shared-utils/http';
import {UtilValidate} from '@shared-utils/validate';

@Component({
  selector: 'app-edit-entity-model',
  templateUrl: './edit-entity-model.component.html',
  styleUrls: ['./edit-entity-model.component.css']
})
export class EditEntityModelComponent implements OnInit {

  submitData: EntityModelMetaData = {inCreate: true, fieldData: [], fkData: []} as EntityModelMetaData;
  typeList = ['id', 'name', 'value', 'date', 'date-time', 'numeric', 'floating-point', 'object', 'indicator', 'id-vlong', 'description', 'currency-amount', 'email', 'currency-precise', 'url', 'fixed-point', 'short-varchar', 'comment', 'time', 'very-long'];
  entityModelList: Array<any>;

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public modalService: NgbModal,
  ) {
  }

  ngOnInit() {
    this.submitData.dataSourceName = this.route.snapshot.paramMap.get('dataSourceName');
    this.submitData.entityName = this.route.snapshot.paramMap.get('entityName');
    if (UtilValidate.isNotEmpty(this.submitData.entityName)) {
      this.submitData.inCreate = false;
      this.http.post('getEntityModelInfo', this.submitData).subscribe((value: any) => {
        Object.assign(this.submitData, value);
      });
    }

    this.http.post('getEntityModelList', {dataSourceName: this.submitData.dataSourceName}).subscribe((data: any) => {
      this.entityModelList = data.list;
    });
  }

  get valid() {
    const reg = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    let msg = null;

    // 验证表名
    if (UtilValidate.isEmpty(this.submitData.entityName)) {
      msg = '表名不可为空';
    }
    // 验证字段信息
    if (this.submitData.fieldData.length > 0) {
      for (const value of this.submitData.fieldData) {
        if (UtilValidate.isEmpty(value.name) || UtilValidate.isEmpty(value.type)) {
          msg = '字段配置不完整';
          break;
        }
        if (value.name.search(reg)) {
          msg = '字段[' + value.name + ']，名称不规范';
          break;
        }
        if (this.typeList.indexOf(value.type) < 0) {
          msg = '字段[' + value.name + ']类型为[' + value.type + '],类型错误';
          break;
        }
      }
      if (!this.submitData.fieldData.some(value => {
        return value.PK === 'Y';
      })) {
        msg = '未设置主键';
      }
    } else {
      msg = '未配置字段';
    }
    // 验证外键信息
    for (const value of this.submitData.fkData) {
      if (UtilValidate.isEmpty(value.name) || UtilValidate.isEmpty(value.type)) {
        msg = '外键配置不完整';
        break;
      }
      if (value.name.search(reg)) {
        msg = '外键[' + value.name + ']，名称不规范';
        break;
      }
      if (!this.entityModelList.some(entityModel => {
        return entityModel.entityName === value.relEntityName;
      })) {
        msg = '外键[' + value.name + ']引用实体为[' + value.relEntityName + '],引用实体错误';
        break;
      }
      if (value.keyMap.length > 0) {
        for (const kMapItem of value.keyMap) {
          if (UtilValidate.isEmpty(value.fieldName) || UtilValidate.isEmpty(value.relFieldName)) {
            msg = '参考字段信息不完整';
            break;
          }
        }
      } else {
        msg = '外键[' + value.name + ']参考字段信息不存在';
      }

    }
    if (msg != null) {
      MessageService.showGlobalMessage('danger', msg);
      return false;
    }
    return true;
  }

  saveData() {
    if (this.valid) {
      this.http.post('saveEntityModel', this.submitData).subscribe(value => {
        if (UtilHttp.notHasError(value)) {
          MessageService.showGlobalMessage('success', '保存成功');
        }
      });

    }
  }

  activeTr(list: Array<any>, field: any) {
    list.forEach((value: any) => {
      value.active = false;
    });
    field.active = true;
  }

  addRow(list: Array<any>, rowData) {
    list.push(rowData);
  }

  deleteRow(list: Array<any>) {
    list.splice(this.findActiveRowIndex(list), 1);
  }

  insertRow(list: Array<any>, rowData) {
    list.splice(this.findActiveRowIndex(list), 0, rowData);
  }

  get defaultFieldRow() {
    return {PK: 'N', required: 'N'};
  }

  get defaultFkRow() {
    return {type: 'one', keyMap: []};
  }

  // 找到选中行下标
  findActiveRowIndex(list: Array<any>) {
    let i = -1;
    list.forEach((value, index) => {
      if (value.active) {
        i = index;
      }
    });
    return i;
  }

  entityModelChange($event: Event, fkItem) {
    const relEntityName = fkItem.relEntityName;
    if (this.entityModelList.some((value: any) => {
      return value.entityName === relEntityName;
    })) {
      this.http.post('getModelFieldList', {dataSourceName: this.submitData.dataSourceName, entityName: relEntityName}).subscribe((data: any) => {
        fkItem.fieldList = data.list;
      });
    }
  }

  pkSelectChange(field: any) {
    if (field.PK === 'Y') {
      field.required = 'Y';
    }
  }
}

class EntityModelMetaData {
  inCreate: boolean;
  dataSourceName: String;

  entityName: String;
  description: String;

  fieldData: Array<any>;

  fkData: Array<any>;
}
