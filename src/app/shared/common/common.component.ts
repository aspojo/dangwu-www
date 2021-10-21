import {FieldInfoService} from './field-info-service';
import {HttpClient} from '@angular/common/http';
import {EventEmitter, Output} from '@angular/core';
import {CommonService} from './common-service';
import {EnvironmentService} from '@shared-services/environment';
import {UtilMisc} from '@shared-utils/misc';

export class CommonComponent {
  public envService: EnvironmentService;
  public http: HttpClient;
  public commonService: CommonService;
  public fieldInfoService: FieldInfoService;

  // 关闭页面事件,当组件被用作弹出窗口的时候使用。
  @Output() closeViewEvent = new EventEmitter<any>();

  // 格式化时间间隔
  formatDuring(duration: any) {
    return UtilMisc.formatDuring(duration);
  }
}
