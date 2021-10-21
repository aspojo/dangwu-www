import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DwAssessmentFieldInfoService} from '../dw-assessment-field-info-service';
import {DwAssessmentService} from '../dw-assessment-service';
import {Observable} from 'rxjs';
import {EntityFieldValidate} from '@shared-utils/entity';
import {UtilHttp} from '@shared-utils/http';
import {MessageService} from '@shared-services/message';
import {CadresManageService} from '../../../../cadres/list-cadres-manage/cadres-manage-service';


@Component({
  selector: 'app-edit-dw-assessment',
  templateUrl: './edit-dw-assessment.component.html',
  styleUrls: ['./edit-dw-assessment.component.scss'],
})
export class EditDwAssessmentComponent extends CommonEditComponent {

  @Input() pkList = [];

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwAssessmentService,
    public fieldInfoService: DwAssessmentFieldInfoService,
    public cadresManageService: CadresManageService
  ) {
    super();
  }

  /**
   * 批量保存审核
   */
  saveAssessment() {
    const validate: EntityFieldValidate = this.fieldInfoService.validateGenericValue(this.editDataTemp);
    if (validate.valid) {
      this.fieldInfoService.assessmentData(this.cadresManageService.dataList, this.editDataTemp).subscribe(this.getLevelUpCallback());
      this.closeViewEvent.emit();
      return;
    }

  }

  getLevelUpCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '保存成功！');
      }
    });
  }
}



