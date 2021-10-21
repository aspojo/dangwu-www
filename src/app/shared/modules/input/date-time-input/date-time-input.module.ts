import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateTimeInputComponent} from './date-time-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {MyDateTimePickerModule} from '@shared-services/datetime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    MyDateTimePickerModule.forRoot(),
    NgbModule,
  ],
  exports: [DateTimeInputComponent],
  declarations: [DateTimeInputComponent]
})
export class DateTimeInputModule { }
