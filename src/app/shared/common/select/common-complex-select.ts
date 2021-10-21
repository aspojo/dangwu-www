import {CommonDataTable} from '../common-data-table';
import {EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {EntityCondition} from '@shared-utils/entity';

export abstract class CommonComplexSelect extends CommonDataTable {
  @Input() selectOne = true; // 只选择一个值

  @Input() mapCondition;
  @Input() modalSize: 'sm' | 'lg' = 'lg';

  @Input() condition;
  @Output() selectedEvent = new EventEmitter<Array<any> | any>();
  @ViewChild('selectView', {static: false}) selectView: TemplateRef<any>;

  @Output() events = new EventEmitter<any>();

  modalRef: NgbModalRef;


  public innerValue: any;


  public changed = new Array<(value: any) => void>();
  public touched = new Array<() => void>();


  openSelectView() {
    this.modalRef = this.modalService.open(this.selectView, {size: this.modalSize});
    this.hasInited = false;
    this.init();
  }

  beforeQuery() {
    let conditionList = this.submitQueryData.condition.conditionList;
    if (this.condition) { // 传入拼装好的条件
      conditionList.push(this.condition);
    } else if (this.mapCondition) { // 传入map
      conditionList = conditionList.concat(EntityCondition.makeConditionList(this.mapCondition));
    }
    this.submitQueryData.condition.conditionList = conditionList;
  }

  afterDataLoaded() {

  }

  // 完成选择
  abstract selectDone();


  get value(): any {
    return this.innerValue;
  }


  set value(value: any) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }


  touch() {
    this.touched.forEach(f => f());
  }


  writeValue(value: any) {
    this.innerValue = value;
  }


  registerOnChange(fn: (value: any) => void) {
    this.changed.push(fn);
  }


  registerOnTouched(fn: () => void) {
    this.touched.push(fn);
  }
}
