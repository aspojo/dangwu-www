import {Component, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonFormInput} from '../../../../shared/common/common-form-input';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: DateInputComponent, multi: true}
  ]
})
export class DateInputComponent extends CommonFormInput<any> implements OnInit {
  @Input() cssStyle = 'col-12 form-control form-control-sm';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
