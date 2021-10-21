import {Directive, ElementRef, EventEmitter, Input, ModuleWithProviders, NgModule, Output} from '@angular/core';
import {CommonPopDirective} from '../common-pop.directive';
import {CommonEditComponent} from './common-edit-component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HandleTaskEvent} from '@shared-common/task';


@Directive({
  selector: '[appCommonEdit]'
})
export class CommonEditDirective extends CommonPopDirective {
  @Input() appCommonEdit;

  @Input() defaultAddValue: any; // 添加数据时的默认值
  @Input() PK: any;
  @Input() handleTaskComponent: any; // 任务办理界面组件

  @Output() dataSavedEvent = new EventEmitter<any>();
  @Output() handleTaskEvent = new EventEmitter<HandleTaskEvent>(); // 启动任务处理事件
  constructor(
    public el: ElementRef,
    public modalService: NgbModal,
  ) {
    super();
  }

  renderView() {
    const component = this.modalRef.componentInstance as CommonEditComponent;
    component.defaultAddValue = this.defaultAddValue;
    component.PK = this.PK;
    component.handleTaskComponent = this.handleTaskComponent;
    component.dataSavedEvent.subscribe((event) => {
      this.closeView();
      this.dataSavedEvent.emit(event);
    });
    component.closeViewEvent.subscribe(() => {
      this.closeView();
    });
    component.handleTaskEvent.subscribe(event => {
      this.handleTaskEvent.emit(event);
    });
  }


}

@NgModule({
  imports: [],
  declarations: [CommonEditDirective],
  exports: [CommonEditDirective]
})
export class CommonEditModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonEditModule,
      providers: [
      ]
    };
  }
}
