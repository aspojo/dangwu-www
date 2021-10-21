import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrueFalsePipe} from './true-false.pipe';
import {ServerUrlPipe} from './server-url.pipe';
import {SafeHtml} from './safe-html.pipe';
import {FileNamePipe} from './file-name.pipe';
import {SafePipe} from './safe.pipe';
import {PermissionPipe} from './permission.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrueFalsePipe, ServerUrlPipe, SafeHtml, FileNamePipe, SafePipe, PermissionPipe],
  exports: [TrueFalsePipe, ServerUrlPipe, SafeHtml, FileNamePipe, SafePipe, PermissionPipe],
})
export class SharedPipesModule {
  static forRoot() {
    return {
      ngModule: SharedPipesModule,
      providers: [],
    };
  }
}
