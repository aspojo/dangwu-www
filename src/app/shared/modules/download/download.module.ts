import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DownloadDirective} from './download.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DownloadDirective],
  exports: [DownloadDirective]
})
export class DownloadModule {
}
