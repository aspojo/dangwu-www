import {CommonComplexSelect} from './common-complex-select';
import {Input} from '@angular/core';
import {UtilValidate} from '@shared-utils/validate';

export abstract class CommonSelectOne extends CommonComplexSelect {
  @Input() showValue; // 显示值
  @Input() valueField; // 值字段
  @Input() showField; // 显示值字段


  selectOneDone(data) {
    data.checked = true;
    this.selectDone();
  }

  selectDone() {
    if (UtilValidate.isNotEmpty(this.selectedList)) {
      const vf = this.valueField ? this.valueField : this.fieldInfoService.valueField;
      const sf = this.valueField ? this.showField : this.fieldInfoService.showField;

      this.value = this.selectedList[0][vf];
      this.showValue = this.selectedList[0][sf];
      this.selectedEvent.emit(this.selectedList[0]);
    } else {
      this.deleteSelected();
    }
    this.modalRef.close();
  }

  deleteSelected() {
    this.showValue = null;
    this.value = 'null';
    this.selectedEvent.emit(null);
  }


}
