import {EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CommonComponent} from '../common.component';
import {UtilValidate} from '@shared-utils/validate';
import {AttachmentService} from '@shared-services/attachment';

export abstract class CommonViewComponent extends CommonComponent implements OnInit {

  public route: ActivatedRoute;
  public attachmentService: AttachmentService;
  public location: Location;

  @Input() procInstId: string; // 流程实例id
  @Input() taskId: string; // 任务id
  @Input() PK: any; // 主键
  @Output() handleTaskDoneEvent = new EventEmitter<any>(); // 任务处理完成事件

  attachList; // 附件数据


  ngOnInit() {
    // 有两种情况：1.当前页面为跳转风格，则从url中获取参数；2.当前页面为弹出风格，则在在相应指令中填充参数
    if (this.envService.notShowPopUp) {
      this.taskId = this.taskId ? this.taskId : this.route.snapshot.paramMap.get('taskId');
      this.procInstId = this.procInstId ? this.procInstId : this.route.snapshot.paramMap.get('procInstId');
      this.PK = this.fieldInfoService.makePKValue(this.route.snapshot.paramMap.get('formPK'));
    } else if (UtilValidate.isNotEmpty(this.PK) && typeof (this.PK) === 'string') {
      // 兼容单主键情况
      this.PK = this.fieldInfoService.makePKValue(this.PK);
    }
    if (this.commonService.hasAttachment) {     // 附件
      this.attachmentService.getAttachmentList(this.fieldInfoService.entityName, this.PK)
        .subscribe((data: any) => {
          this.attachList = data.list;
        });
    }
  }



  // 查看流程信息
  get viewTask(): boolean {
    return UtilValidate.isNotEmpty(this.procInstId);
  }


  // 返回上一界面
  goBack() {
    this.location.back();
  }


  // 是否可以提交审批
  canSubmit(): boolean {
    return true;
  }

  // 当返回值不为空时，代表该业务自己提交审批
  taskHandle(): (msg: string, taskData: any) => any {
    return null;
  }

}
