import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {DicService} from '../../services/dic.service';


import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'dic-select',
  template: `
    <select [(ngModel)]="value" [class]="cssStyle" [name]="name">
      <option>请选择</option>
      <ng-template ngFor let-item [ngForOf]="dataList | async" let-i="index">
        <option value="{{item.dicId}}">{{item.dicValue}}</option>
      </ng-template>
    </select>
  `, providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: DicSelectComponent, multi: true}
  ],
})
export class DicSelectComponent<T> implements ControlValueAccessor, OnInit {

  @Input() dicSelect;
  @Input() cssStyle;
  @Input() name;
  @Input() hasDefault = false;
  /*
  <option *ngFor="let item of dataList | async as users;index as i" value="{{item.dicId}}">{{item.dicValue}}</option>
  */

  private innerValue: T;


  private changed = new Array<(value: T) => void>();
  private touched = new Array<() => void>();


  dataList;

  constructor(_renderer: Renderer2, _elementRef: ElementRef, private dicService: DicService) {
  }

  getDataList() {
    return this.dicService.getDicEnabled(this.dicSelect);
  }

  ngOnInit(): void {
    this.dataList = this.getDataList();
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
    if (this.hasDefault && !value) {// value不存在，并且需要默认选中
      this.dataList.subscribe(data => {
        this.innerValue = data[0].dicId;
      });
    }
    this.innerValue = value;
  }


  registerOnChange(fn: (value: T) => void) {
    this.changed.push(fn);
  }


  registerOnTouched(fn: () => void) {
    this.touched.push(fn);
  }
}
