import {Directive, ElementRef, EventEmitter, Input, ModuleWithProviders, NgModule, Output} from '@angular/core';
import {CommonPopDirective} from '../common-pop.directive';
import {CommonViewComponent} from './common-view.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Directive({
  selector: '[appCommonView]'
})
export class CommonViewDirective extends CommonPopDirective {
  @Input() appCommonView;


  @Input() procInstId: string; // 流程实例id
  @Input() taskId: string; // 任务id
  @Input() PK: any; // 主键
  @Output() handleTaskDoneEvent = new EventEmitter<any>(); // 任务处理完成事件
  constructor(
    public el: ElementRef,
    public modalService: NgbModal,
  ) {
    super();
  }

  renderView() {
    const component = this.modalRef.componentInstance as CommonViewComponent;
    component.procInstId = this.procInstId;
    component.taskId = this.taskId;
    component.PK = this.PK;
    component.closeViewEvent.subscribe(() => {
      this.closeView();
    });
    component.handleTaskDoneEvent.subscribe(() => {
      this.handleTaskDoneEvent.emit();
      this.closeView();
    });
  }

}

@NgModule({
  imports: [],
  declarations: [CommonViewDirective],
  exports: [CommonViewDirective]
})
export class CommonViewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonViewModule,
      providers: [
      ]
    };
  }
}

