import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DicSelectComponent} from './dic-select.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DicSelectComponent],
  exports: [DicSelectComponent]
})
export class DicSelectModule {
}
