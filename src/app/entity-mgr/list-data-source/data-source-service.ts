import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';

@Injectable()
export class DataSourceService extends CommonService {

  get processInstanceKey() {
    return '';
  }

}


