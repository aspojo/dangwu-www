import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';

@Injectable()
export class DwPertyMemberManageService extends CommonService {

  public dataList: any;
  public phases: any;
  public currentGeneral: any;
  public currentBranch: any;

  public letterTemplateList: any;
  get processInstanceKey() {
    return '';
  }

}


