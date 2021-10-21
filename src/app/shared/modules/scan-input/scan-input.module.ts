import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ScanInputComponent} from './scan-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ScanInputComponent],
  exports: [ScanInputComponent]
})
export class ScanInputModule {
}
