import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegionSelectComponent} from './region-select.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RegionSelectComponent],
  exports: [RegionSelectComponent]
})
export class RegionSelectModule {
}
