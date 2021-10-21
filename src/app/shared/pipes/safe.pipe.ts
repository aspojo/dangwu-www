import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ElementRef} from '@angular/core';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) {}
  transform(url, type) {
    if (type === 'html') {
     return this.sanitizer.bypassSecurityTrustHtml(url);
    } else if (type === 'style') {
     return this.sanitizer.bypassSecurityTrustStyle(url);
    } else if (type === 'script') {
      return this.sanitizer.bypassSecurityTrustScript(url);
    } else if (type === 'url') {
      return this.sanitizer.bypassSecurityTrustUrl(url);
    } else if (type === 'resourceUrl') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      console.log( 'safe 管道报错：type 只能是 html，style，script，url，resourceUrl这五种！' );
      return ;
    }
  }
}
