import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwRelationshipFieldInfoService} from '../dw-relationship-field-info-service';
import {DwRelationshipService} from '../dw-relationship-service';
import {MessageService} from '@shared-services/message';


@Component({
  selector: 'app-edit-dw-relationship',
  templateUrl: './edit-dw-relationship.component.html',
  styleUrls: ['./edit-dw-relationship.component.scss'],
})
export class EditDwRelationshipComponent extends CommonEditComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwRelationshipService,
    public fieldInfoService: DwRelationshipFieldInfoService,
  ) {
    super();
  }

  beforeSubmit(validate) {
    // 验证时间字符串填写格式，并转成日期
    const inputMembership = this.editDataTemp.membership;
    if (!inputMembership) {
      return;
    }
    if (inputMembership.match(/\d{4}.\d{2}/)) {
      const month = inputMembership.substring(5, 7);
      if (month <= 12 && month > 0) {
        let membership = inputMembership.replace('.', '-');
        membership = membership + '-01';
        this.editDataTemp.membership = membership;
      } else {
        validate.addError('党费缴至时间格式:2001.01！');
      }
    } else {
      validate.addError('党费缴至时间格式:2001.01！');
    }
  }

  afterSave(savedValue) {
    MessageService.showGlobalMessage('success', '转接成功！');
  }

  afterGetOne() {
    if (this.editDataTemp.id) {
      this.editDataTemp.membership = this.editDataTemp.membership.substring(0, 7).replace('-', '.');
    } else {
      // 根据年份和党委查询最新的介绍信，编号自增
      this.http.post('getPertymembernumber', {pertymember: this.editDataTemp.pertymember}).subscribe((data: any) => {
        this.editDataTemp.pertymembernumber = data.pertymembernumber;
      });
    }
  }


}
