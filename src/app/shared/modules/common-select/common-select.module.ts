import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonSelectComponent} from './common-select.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CommonSelectComponent],
  exports: [CommonSelectComponent]
})
export class CommonSelectModule {
}
