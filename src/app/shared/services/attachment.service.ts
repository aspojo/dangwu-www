import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';

@Injectable()
export class AttachmentService {

  public entityName = 'SysAttachments';

  constructor(private http: HttpClient) {
  }

  public makeModuleId(PK) {
    let moduleId = '';
    Object.values(PK).forEach(value => {
      moduleId = moduleId + '.' + value;
    });
    return moduleId;
  }

  /**
   * 保存附件
   */
  public saveAttachment(attachType, PK: Map<any, any>, attachList) {
    if (attachList && attachList.length !== 0) {
      attachList.forEach((attach: any) => {
        attach.attachType = attachType;
        attach.moduleId = this.makeModuleId(PK);
        attach.domainId = '1';
      });
      // 提交附件
      this.http.post('genericSaveAll', {
        entityName: this.entityName,
        valueList: attachList,
        autoPK: true
      }).subscribe((data: any) => {
      });
    }
  }

  /**
   * 获取附件
   */
  public getAttachmentList(attachType, PK: Map<any, any>) {

    // 附件
    return this.http.post('getPageData', {
      entityName: this.entityName,
      viewSize: 1000,
      condition: {
        conditionList: [
          new ConditionExpr('attachType', EntityOperator.EQUALS, attachType),
          new ConditionExpr('moduleId', EntityOperator.EQUALS, this.makeModuleId(PK))
        ], operator: EntityOperator.AND
      },

    });

  }

}
