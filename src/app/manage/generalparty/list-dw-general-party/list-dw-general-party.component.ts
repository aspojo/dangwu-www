import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DwGeneralPartyFieldInfoService} from './dw-general-party-field-info-service';
import {DwGeneralPartyService} from './dw-general-party-service';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {Observable} from 'rxjs';
import {Auth} from '@shared-services/auth';
import {MessageService} from '@shared-services/message';

@Component({
  selector: 'app-list-dw-general-party',
  templateUrl: './list-dw-general-party.component.html',
  styleUrls: ['' +
  './list-dw-general-party.component.scss'],
  animations: [routerTransition()]
})
export class ListDwGeneralPartyComponent extends CommonDataTable {
  @ViewChild('branchpartyContent', {static: false}) branchpartyContent: TemplateRef<any>;
  @ViewChild('editLetterTemplateContent', {static: false}) editLetterTemplateContent: TemplateRef<any>;
  public branchepartyRef: NgbModalRef;
  public editLetterTemplateRef: NgbModalRef;
  @Input() isQueryCollapsed = false;
  @Input() isGeneral = false; // 是否为分党委/党总支
  @Input() isManagePage = false; // 是否为管理界面，根据用户所属党委
  isOpratorCollapsed = false;
  clickPK: number;
  generalPartyHistoryList: any;
  letterTemplate: any = {
    id: null, // 介绍信模板id
    partyId: null, // 组织id
    currentAddress: null, // 本单位名称
    mailingAddress: null, // 通讯地址
    telephoneNumber: null, // 联系电话
    faxNumber: null, // 传真
    postcode: null // 邮编
  };

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwGeneralPartyService,
    public fieldInfoService: DwGeneralPartyFieldInfoService,
    public dwGeneralPartyService: DwGeneralPartyService,
  ) {
    super();
    this.queryData.generalPartyHistory = '0';
    this.generalPartyHistoryList = new Observable((subscriber) => {
      const dataList = [{id: '0', value: '现有'}, {id: '1', value: '历史'}];
      subscriber.next(dataList);
    });
  }

  beforeQuery() {
    if (this.isGeneral) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('parentId', EntityOperator.EQUALS, 'null'));
      // this.submitQueryData.condition.conditionList.push(new ConditionExpr('generalPartyHistory', EntityOperator.EQUALS, 0));
      if (Auth.userData.generalPartyId) {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('id', EntityOperator.EQUALS, Auth.userData.generalPartyId));
      }
    }
    if (this.isManagePage) {
      const generalId = Auth.userData.generalPartyId;
      if (generalId !== null) {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('id', EntityOperator.EQUALS, generalId));
      }
    }
  }

  setGeneral() {
    this.dwGeneralPartyService.isGeneral = this.isGeneral;
  }

  manageBranchparty(data) {
    this.clickPK = this.fieldInfoService.getEntityPKValue(data);
    this.dwGeneralPartyService.parentId = this.clickPK;
    this.branchepartyRef = this.modalService.open(this.branchpartyContent, {size: 'lg'});
  }

  /**
   * 删除党委组织
   */
  deleteParty() {
    const pkList = this.selectedPK;
    this.deletePost(pkList, this.isGeneral).subscribe((data: any) => {
      if (data.error == null) {
        this.loadDataList();
      }
    });
  }

  deletePost(list, isgeneral): Observable<any> {
    // 保存数据
    return this.http.post('deleteParty', {
      pkList: list,
      isGeneral: isgeneral,
    });
  }

  afterDataLoaded() {
    this.dwGeneralPartyService.isGeneral = this.isGeneral;
  }

  /**
   * 标记删除
   * @param item
   */
  confirmHistory(item) {
    this.http.post('historyParty', {
      generalId: item.id,
      isGeneral: this.isGeneral
    }).subscribe((data: any) => {
      if (data.error) {
        MessageService.showGlobalMessage('danger', data.error);
      } else {
        this.loadDataList();
        MessageService.showGlobalMessage('success', '标记删除成功');
      }

    });
  }

  /**
   * 恢复标记删除
   * @param item
   */
  confirmRecovery(item) {
    item.generalPartyHistory = '0';
    this.http.post('genericSave', {
      entityName: 'DwGeneralParty',
      fieldMap: item,
      autoPK: true
    }).subscribe((data: any) => {
      this.loadDataList();
      MessageService.showGlobalMessage('success', '恢复成功');
    });
  }


  /**
   * 打开介绍信模板信息设置
   */
  openLetterTemplate(data) {
    this.http.post('getLetterTemplate', {partyId: data.id}).subscribe((result: any) => {
      console.log(result);
      if (result.code === 0) {
        // 不存在，则新增
        this.letterTemplate = {
          id: null,
          partyId: data.id,
          currentAddress: null,
          mailingAddress: null,
          telephoneNumber: null,
          faxNumber: null,
          postcode: null
        };
      } else if (result.code === 1) {
        // 存在，则填充
        this.letterTemplate.id = result.letterTemplate.id;
        this.letterTemplate.partyId = result.letterTemplate.partyId;
        this.letterTemplate.currentAddress = result.letterTemplate.currentAddress;
        this.letterTemplate.postcode = result.letterTemplate.postcode;
        this.letterTemplate.faxNumber = result.letterTemplate.faxNumber;
        this.letterTemplate.telephoneNumber = result.letterTemplate.telephoneNumber;
        this.letterTemplate.mailingAddress = result.letterTemplate.mailingAddress;
      }
    });

    this.letterTemplate.partyId = data.id;
    this.editLetterTemplateRef = this.modalService.open(this.editLetterTemplateContent, {size: 'xl'});
  }

  /**
   * 保存介绍信模板设置
   */
  saveLetterTemplate() {
    console.log(this.letterTemplate);
    this.http.post('saveLetterTemplate', {letterTemplate: this.letterTemplate}).subscribe((data: any) => {
      console.log(data);
      if (data.error) {
        MessageService.showGlobalMessage('danger', data.error);
      } else {
        MessageService.showGlobalMessage('success', '保存成功');
        this.editLetterTemplateRef.close();
      }
    });

  }
}
