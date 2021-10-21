import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {environment} from '@environments';

@Directive({
  selector: '[appDownload]'
})
export class DownloadDirective<T> implements OnInit {
  @Input() appDownload;
  @Input() uri = 'download';

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.href = environment.serverUrl + this.uri + '/' + this.appDownload;
  }

}
