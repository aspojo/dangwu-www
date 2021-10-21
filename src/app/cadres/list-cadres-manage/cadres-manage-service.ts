import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';

@Injectable()
export class CadresManageService extends CommonService {

  public dataList: any;
  public generalParty: any;
  public model: any;

  get processInstanceKey() {
    return '';
  }

}


