import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';

@Injectable()
export class ActDemoLeaveService extends CommonService {

  get processInstanceKey() {
    return 'actPrcLeave';
  }

}


