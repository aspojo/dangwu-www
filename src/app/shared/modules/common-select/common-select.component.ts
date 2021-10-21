import {Component, Input} from '@angular/core';


import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonFormInput} from '../../common/common-form-input';
import {Observable} from 'rxjs';

@Component({
  selector: 'common-select',
  template: `
    <select [(ngModel)]="value" [class]="cssStyle" style="width:100%" [name]="name">
      <option value="">请选择</option>
      <ng-template ngFor let-item [ngForOf]="dataList | async">
        <option value="{{item.id}}">{{item.value}}</option>
      </ng-template>
      <ng-template ngFor let-item [ngForOf]="additionalDataList">
        <option value="{{item.id}}">{{item.value}}</option>
      </ng-template>
    </select>
  `, providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: CommonSelectComponent, multi: true}
  ],
})
export class CommonSelectComponent<T> extends CommonFormInput<T> {

  @Input() commonSelect;
  @Input() dataList: Observable<T>;
  @Input() additionalDataList: Array<{ id, value }> = [];

  constructor() {
    super();
  }

  writeValue(value: T) {
    if (this.hasDefault && !value) {// value不存在，并且需要默认选中
      this.dataList.subscribe((data: any) => {
        this.innerValue = data[0].id;
      });
    }
    this.innerValue = value;
  }


}
