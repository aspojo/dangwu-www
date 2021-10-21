import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';

@Injectable()
export class DwPertyMemberService extends CommonService {
  public letterTemplateList: any;

  get processInstanceKey() {
    return '';
  }

}


