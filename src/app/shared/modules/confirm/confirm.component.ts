import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[confirm]',
  template: `
    <ng-template #confirmModal>

      <div class='modal-header'>
        <h4 class='modal-title'>{{confirmTitle}}</h4>
        <button type='button' class='close' aria-label='Close' (click)='cancelClick()'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div class='modal-body'>
        <p>{{confirm}}</p>
      </div>
      <div class='modal-footer'>
        <button type='button' class='btn btn-secondary' (click)='okClick()'>{{confirmOk}}</button>
        <button type='button' class='btn btn-secondary' (click)='cancelClick()'>{{confirmCancel}}</button>
      </div>
    </ng-template>
    <ng-content></ng-content>
  `,
})
export class ConfirmComponent {

  @Input() confirmOk = '确定';
  @Input() confirmCancel = '取消';
  @Input() confirmTitle = '确认提示';
  @Input() confirm = '确定吗？';
  @Input() confirmIf = true;
  @Input() confirmSettings: Object = {};
  @Input() confirmTemplate: string | TemplateRef<any> = null;
  @Output() confirmClick = new EventEmitter();

  // @ViewChild('confirmModal', {static: false}) confirmModal: ModalDirective;
  @ViewChild('confirmModal', {static: false}) confirmModal: TemplateRef<any>;
  private confirmModalRef: NgbModalRef;


  constructor(private el: ElementRef, renderer: Renderer2, private modalService: NgbModal) {
    const element: HTMLElement = el.nativeElement;
    element.addEventListener('click', (event) => {
      if (this.confirmIf) {
        this.confirmModalRef = this.modalService.open(this.confirmModal);
        // this.confirmModal.show();
      }
    });
  }

  okClick() {
    this.cancelClick();
    this.confirmClick.emit();

  }

  cancelClick() {
    // this.confirmModal.hide();
    this.confirmModalRef.close();
  }
}
