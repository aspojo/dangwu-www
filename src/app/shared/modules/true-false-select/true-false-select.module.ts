import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrueFalseSelectComponent} from './true-false-select.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [TrueFalseSelectComponent],
  exports: [TrueFalseSelectComponent]
})
export class TrueFalseSelectModule {
}
