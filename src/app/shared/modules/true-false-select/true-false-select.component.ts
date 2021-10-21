import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonFormInput} from '../../common/common-form-input';
import {Component} from '@angular/core';

@Component({
  selector: 'true-false-select',
  template: `
    <div class="btn-group btn-group-toggle p-0" ngbRadioGroup name="radioBasic" [(ngModel)]="value">
      <label ngbButtonLabel class="btn btn-outline-primary btn-sm col-6" style="box-shadow: none;">
        <input ngbButton type="radio" value="Y"> 是
      </label>
      <label ngbButtonLabel class="btn btn-outline-primary btn-sm col-6" style="box-shadow: none;">
        <input ngbButton type="radio" value="N"> 否
      </label>
    </div>
  `, providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: TrueFalseSelectComponent, multi: true}
  ],
})
export class TrueFalseSelectComponent<T> extends CommonFormInput<T> {
  constructor() {
    super();
  }
}
