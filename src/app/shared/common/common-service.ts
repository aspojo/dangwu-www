import {UtilValidate} from '@shared-utils/validate';

export abstract class CommonService {
/**************************流程相关**************************/
  hasAttachment = false; // 是否有附件栏,子类可重写
  abstract get processInstanceKey(); // 流程实例key
  // 是否参与流程审批
  get hasFlow() {
    return UtilValidate.isNotEmpty(this.processInstanceKey);
  }

}
