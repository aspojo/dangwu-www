import {Component, Input, OnInit} from '@angular/core';
import {CommonFormInput} from '../../../../shared/common/common-form-input';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-date-time-input',
  templateUrl: './date-time-input.component.html',
  styleUrls: ['./date-time-input.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: DateTimeInputComponent, multi: true}
  ]
})
export class DateTimeInputComponent extends CommonFormInput<any> implements OnInit {
  @Input() cssStyle = 'col-12 form-control form-control-sm';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
