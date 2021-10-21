import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';

@Injectable()
export class DemoOrderService extends CommonService {

  hasAttachment  = true;

  get processInstanceKey() {
    return '';
  }

}


