import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateInputComponent} from './date-input.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    DateInputComponent
  ],
  declarations: [DateInputComponent]
})
export class DateInputModule { }
