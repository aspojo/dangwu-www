import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageViewComponent} from './image-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageViewComponent],
  exports: [ImageViewComponent]
})
export class ImageViewModule {
}
