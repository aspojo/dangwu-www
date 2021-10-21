import {Injectable} from '@angular/core';
import {CommonService} from '@shared-common/service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DtDataTransferModelService extends CommonService {

  constructor(public http: HttpClient) {
    super();
  }

  get processInstanceKey() {
    return '';
  }

}


