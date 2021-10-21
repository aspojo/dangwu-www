import {Component, Input} from '@angular/core';


import {NG_VALUE_ACCESSOR,} from '@angular/forms';
import {CommonFormInput} from '../../common/common-form-input';

@Component({
  selector: 'scan-input',
  template: `
      <textarea [disabled]="disabled" [class]="cssStyle" [style]="styleAttr" rows="{{rows}}" [(ngModel)]="value" (keyup)="formatValue($event)"></textarea>
  `, providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: ScanInputComponent, multi: true}
  ],
})
export class ScanInputComponent extends CommonFormInput<String> {

  @Input() scanInput;
  @Input() rows = 10;
  @Input() disabled = false;
  @Input() styleAttr;

  constructor() {
    super();
  }


  formatValue($event) {
    if ($event.key === 'Enter') {
      // 替换换行为逗号
      this.value = this.value.replace('\n', ',');
    }
  }

  set value(value) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }

  get value() {
    // if (this.innerValue) {
    //   const li = this.innerValue.lastIndexOf(',');
    //   if (this.innerValue.length === li + 1) {
    //     return this.innerValue.substr(0, li);
    //   }
    // }
    return this.innerValue;
  }
}
