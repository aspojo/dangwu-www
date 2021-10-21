import {Component, Input} from '@angular/core';
import {environment} from '@environments';

@Component({
  selector: 'app-image-view',
  template: `
    <a [href]="url" target="_blank"><img [class]="imgStyle" *ngIf="url" [src]="url"></a>
  `,
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent {
  @Input() appImageView;
  @Input() uri = 'download/';
  @Input() imgStyle;

  get url() {
    let src = '';
    if (this.appImageView) {
      src = environment.serverUrl + this.uri + this.appImageView;
    }
    return src;
  }

}
