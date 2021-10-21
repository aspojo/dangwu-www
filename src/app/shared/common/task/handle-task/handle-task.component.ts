import {ApplicationRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {UEditorComponent} from 'ngx-ueditor';
import {HttpClient} from '@angular/common/http';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {routerTransition} from '@app/router-animations';
import {Location} from '@angular/common';
import {TaskService} from '../task.service';
import {CommonComponent} from '../../common.component';
import {Observable} from 'rxjs';
import {EnvironmentService} from '@shared-services/environment';
import {MessageService} from '@shared-services/message';
import {EntityOperator} from '@shared-utils/entity';
import {UtilValidate} from '@shared-utils/validate';

@Component({
  selector: 'app-handle-task',
  templateUrl: './handle-task.component.html',
  styleUrls: ['./handle-task.component.css'],
  animations: [routerTransition()]
})
export class HandleTaskComponent extends CommonComponent implements OnInit {
  @Input() taskId: any; // 任务id
  @Input() procInstId: any; // 流程实例id
  @Input() formView: any; // 主界面元素
  @Input() beforeTaskHandle: Observable<boolean>; // 提交审批之前
  @Output() closeViewEvent = new EventEmitter<any>(); // 事件
  @Output() handleTaskDoneEvent = new EventEmitter<any>(); // 任务处理完成事件
  task: any;
  config: any = {
    autoClearinitialContent: true,
    wordCount: false
  };

  handleList;  // 审批过程数据
  processImageUrl: string;
  submitData: any = {
    taskId: null,
    procInstId: null,
    msg: null, // 审批结果 yes 或者 no
    option: null, // 审批意见
    assignee: null // 下一步流程代办人
  };
  moreViewRef: NgbModalRef;
  options: any; // 要查看的评论
  @ViewChild('option', {static: false}) optionEditor: UEditorComponent;


  constructor(
    public el: ElementRef,
    public http: HttpClient,
    public modalService: NgbModal,
    public route: ActivatedRoute,
    public router: Router,
    public location: Location,

    public envService: EnvironmentService,
    public app: ApplicationRef,
    public taskService: TaskService,
  ) {
    super();
  }

  ngOnInit() {
    this.init();
  }

  init() {
    console.log('handle-task init');
    if (this.envService.notShowPopUp) {
      this.taskId = this.route.snapshot.paramMap.get('taskId');
      this.procInstId = this.route.snapshot.paramMap.get('procInstId');
    }

    this.getHandleList();
    if (this.taskId) {
      this.getTaskInfo();
    }

  }

  getTaskInfo() {
    this.http.post('getOne', {entityName: 'ActRuTaskView', PK: {id: this.taskId}}).subscribe((oneValue: any) => {
      if (!oneValue.error) {
        this.task = oneValue;
      } else {
        MessageService.showGlobalMessage('success', '该任务已经不存在，可能是被他人签收或者被删除。');
        this.closeView();

      }
    });
  }

  // 获取审批过程
  getHandleList() {
    this.http.post('getPageData',
      {
        entityName: 'ActHiActinstVarinstView',
        condition: {lhs: 'procInstId', operator: EntityOperator.EQUALS, rhs: this.procInstId},
        fieldFormat: {startTime: {format: 'yyyy-MM-dd HH:mm:ss'}, endTime: {format: 'yyyy-MM-dd HH:mm:ss'}},
        orderBy: ['id']
      }).subscribe((data: any) => {
      this.handleList = data.list;
    });
  }

  closeView() {
    if (this.envService.showPopUp) {
      this.handleTaskDoneEvent.emit();
    } else {
      this.location.back();
    }
  }

  // 提交审批
  taskHandle(msg: string) {
    if (this.beforeTaskHandle) {
      this.beforeTaskHandle.subscribe(value => {
        if (value) {
          this.submitToServer(msg);
        }
      });
    } else {
      this.submitToServer(msg);
    }
  }

  submitToServer(msg: string) {
    this.submitData.taskId = this.taskId;
    this.submitData.procInstId = this.procInstId;
    this.submitData.msg = msg;
    this.http.post('taskHandle', this.submitData).subscribe((data: any) => {
      if (!data.error) {
        MessageService.showGlobalMessage('success', '办理完成');
        MessageService.notifyEvent.emit(); // 待办提醒数据刷新
        this.closeView();
      }
    });
  }

  invalidProcess() {
    this.taskService.invalidProcess([this.procInstId]).subscribe(() => {
      this.closeView();
    });
  }

  get inView(): boolean {
    return UtilValidate.isEmpty(this.taskId);
  }

  get isStartTask(): boolean {
    if (this.task) {
      return this.task.startTask === 'Y';
    }
    return false;
  }

  showText(content: TemplateRef<any>, data: any) {
    this.options = data.text.split(',eiip,')[1];
    this.moreViewRef = this.modalService.open(content);
  }

  getOptionsStart(data) {
    return data.text.split(',eiip,')[0];
  }
}
