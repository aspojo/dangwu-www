import {Directive, ElementRef, EventEmitter, Input, ModuleWithProviders, NgModule, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonPopDirective} from './common-pop.directive';
import {CommonDataTable} from '@shared-common/data-table';


@Directive({
  selector: '[appCommonDataTable]'
})
export class CommonDataTableDirective extends CommonPopDirective {
  @Input() appCommonDataTable;

  @Input() showPopUp: any = false; // 是否为弹出样式
  @Input() hasBackButton: any = false; // 是否有返回按钮
  @Input() showDataTableOnly = false; // 当前组件是否仅显示表格，不显示查询框
  @Input() queryData: any = {}; // 查询表单数据 , 可以接受外部传参
  @Input() defaultAddValue: any; // 添加数据时的默认值

  @Output() dataSavedEvent = new EventEmitter<Array<any>>(); // 数据保存事件
  @Output() dataDeleteEvent = new EventEmitter<Array<any>>(); // 数据删除事件

  constructor(
    public el: ElementRef,
    public modalService: NgbModal,
  ) {
    super();
  }

  renderView() {
    const component = this.modalRef.componentInstance as CommonDataTable;
    component.showPopUp = this.showPopUp;
    component.hasBackButton = this.hasBackButton;
    component.showDataTableOnly = this.showDataTableOnly;
    component.queryData = this.queryData;
    component.defaultAddValue = this.defaultAddValue;
    component.dataSavedEvent.subscribe((event) => {
      this.closeView();
      this.dataSavedEvent.emit(event);
    });
    component.closeViewEvent.subscribe(() => {
      this.closeView();
    });
    component.dataDeleteEvent.subscribe(event => {
      this.dataDeleteEvent.emit(event);
    });
  }


}

@NgModule({
  imports: [],
  declarations: [CommonDataTableDirective],
  exports: [CommonDataTableDirective]
})
export class CommonDataTableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonDataTableModule,
      providers: []
    };
  }
}
