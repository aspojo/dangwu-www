import {Component, EventEmitter, Input, Output} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {EnvironmentService} from '@shared-services/environment';
import {UtilValidate} from '@shared-utils/validate';

@Component({
  selector: 'app-common-pop-or-page',
  templateUrl: './common-pop-or-page.component.html',
  animations: [routerTransition()]

})
export class CommonPopOrPageComponent {
  @Input() showPopUp: any; // 是否为弹出样式
  @Input() hasBackButton: any; // 是否出现返回按钮
  @Input() backUrl: string;
  @Input() heading: any = {};
  @Input() contentView: any; // 主界面元素
  @Input() operateView: any; // 操作界面元素
  @Output() closeViewEvent = new EventEmitter<any>(); // 事件

  constructor(public envService: EnvironmentService) {
    if (UtilValidate.isEmpty(this.showPopUp)) {
      this.showPopUp = envService.showPopUp;
    }
    if (UtilValidate.isEmpty(this.hasBackButton)) {
      this.hasBackButton = true;
    }
  }

}
