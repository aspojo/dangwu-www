import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';

@Injectable()
export class DtExcelDataExtractModelService extends CommonService {

  get processInstanceKey() {
    return '';
  }
  modelTypeForm = 'dt_edemt_01';

}


