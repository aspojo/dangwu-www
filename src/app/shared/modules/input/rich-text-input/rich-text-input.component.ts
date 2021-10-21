import {Component, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonFormInput} from '../../../../shared/common/common-form-input';

@Component({
  selector: 'app-rich-text-input',
  templateUrl: './rich-text-input.component.html',
  styleUrls: ['./rich-text-input.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: RichTextInputComponent, multi: true}
  ]
})
export class RichTextInputComponent extends CommonFormInput<any> implements OnInit {
  @Input() cssStyle = 'col-12 p-0';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
