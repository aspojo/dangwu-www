import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AfterContentInit, ElementRef, Input} from '@angular/core';
import {CommonComponent} from './common.component';

export abstract class CommonPopDirective extends CommonComponent implements AfterContentInit {

  public modalService: NgbModal;
  public el: ElementRef;

  @Input() modalSize: any = 'lg'; // 弹出框大小
  @Input() comp: any; // 弹出内容组件的类

  modalRef: NgbModalRef;

  /*
   渲染视图， 主要是设置视图入参，及监听事件
   通过this.modalRef.componentInstance 来设置
    */
  abstract renderView();

  constructor() {
    super();
  }

  ngAfterContentInit(): void {
    if (this.el) {
      const element: HTMLElement = this.el.nativeElement;
      element.addEventListener('click', (event) => {
        this.openView();
      });
    }

  }

  openView() {
    this.modalRef = this.modalService.open(this.comp, {size: this.modalSize});
    this.renderView();
  }


  closeView() {
    this.modalRef.close();
  }
}
