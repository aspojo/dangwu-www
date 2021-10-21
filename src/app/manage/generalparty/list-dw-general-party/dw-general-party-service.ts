import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';

@Injectable()
export class DwGeneralPartyService extends CommonService {
  public parentId: any;
  public isGeneral: boolean;
  get processInstanceKey() {
    return '';
  }

}


