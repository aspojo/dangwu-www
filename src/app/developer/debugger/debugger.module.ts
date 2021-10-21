import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DebuggerComponent} from './debugger.component';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '@shared-modules/page-header';
import {FormsModule} from '@angular/forms';
import {ScanInputModule} from '@shared-modules/scan-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: DebuggerComponent}]),
    PageHeaderModule,
    ScanInputModule,
  ],
  declarations: [DebuggerComponent],
  exports: [RouterModule]
})
export class DebuggerModule {
}

