import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplexDevelopComponent} from './complex-develop.component';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '@shared-modules/page-header';
import {HighlightJsModule} from 'ngx-highlight-js';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ComplexDevelopComponent}]),
    PageHeaderModule,
    HighlightJsModule,
  ],
  declarations: [ComplexDevelopComponent],
  exports: [RouterModule]
})
export class ComplexDevelopModule {
}

