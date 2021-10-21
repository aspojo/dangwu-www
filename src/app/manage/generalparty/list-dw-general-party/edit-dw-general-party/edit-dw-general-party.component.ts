import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwGeneralPartyFieldInfoService} from '../dw-general-party-field-info-service';
import {DwGeneralPartyService} from '../dw-general-party-service';
import {MessageService} from '@shared-services/message';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-edit-dw-general-party',
  templateUrl: './edit-dw-general-party.component.html',
  styleUrls: ['./edit-dw-general-party.component.scss'],
})
export class EditDwGeneralPartyComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwGeneralPartyService,
    public fieldInfoService: DwGeneralPartyFieldInfoService,
    public dwGeneralPartyService: DwGeneralPartyService,
  ) {
    super();
  }

  /**
   *  需要默认设置一些值
   */
  beforeValidateAndFormat() {

    if (!this.editDataTemp.generalPartyHistory) {
      this.editDataTemp.generalPartyHistory = 0;
    }
    if (!this.editDataTemp.cadres) {
      this.editDataTemp.cadres = 1;
    }
    if (!this.dwGeneralPartyService.isGeneral && this.dwGeneralPartyService.parentId) {
      this.editDataTemp.parentId = this.dwGeneralPartyService.parentId;
    }
  }

  /**
   * 保存新增的党委支部，同时判断是否同步到部门
   */
  saveGeneralParty() {
    const map = {
      generalPartyNumber: this.editDataTemp.generalPartyNumber,
      generalPartyName: this.editDataTemp.generalPartyName,
      // parentId: 0,
      generalPartyHistory: '0',
      cadres: '1',
      isAddBumen: this.editDataTemp.isAddBumen ? this.editDataTemp.isAddBumen : false
    };
    this.http.post('addGeneralParty', map).subscribe((data: any) => {
      if (data.code === '1') {
        MessageService.showGlobalMessage('success', '添加成功');
      } else {
        MessageService.showGlobalMessage('danger', '添加失败');
      }
    });
  }

  commitToServer(): Observable<object> {
    const map = {
      id: this.editDataTemp.id,
      generalPartyNumber: this.editDataTemp.generalPartyNumber,
      generalPartyName: this.editDataTemp.generalPartyName,
      parentId: this.editDataTemp.parentId,
      generalPartyHistory: '0',
      cadres: '1',
      isAddBumen: this.editDataTemp.isAddBumen ? this.editDataTemp.isAddBumen : false
    };
    return this.http.post('addGeneralParty', map);
  }

  afterSave(savedValue) {
    if (savedValue.code === '1') {
      MessageService.showGlobalMessage('success', '添加成功');
    } else {
      MessageService.showGlobalMessage('danger', '添加失败');
    }
  }

  /**
   * 判断是否为分党委，或党支部
   */
  get inGeneral() {
    // return !this.editDataTemp.parentId;
    return this.dwGeneralPartyService.isGeneral;
  }

}
