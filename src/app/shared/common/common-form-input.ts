import {Input} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';


export class CommonFormInput<T> implements ControlValueAccessor {

  @Input() cssStyle;
  @Input() name;
  @Input() hasDefault = false;
  /*
  <option *ngFor="let item of dataList | async as users;index as i" value="{{item.dicId}}">{{item.dicValue}}</option>
  */

  public innerValue: T;


  public changed = new Array<(value: T) => void>();
  public touched = new Array<() => void>();


  constructor() {
  }


  get value(): T {
    return this.innerValue;
  }


  set value(value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }


  touch() {
    this.touched.forEach(f => f());
  }


  writeValue(value: T) {
    this.innerValue = value;
  }


  registerOnChange(fn: (value: T) => void) {
    this.changed.push(fn);
  }


  registerOnTouched(fn: () => void) {
    this.touched.push(fn);
  }
}
