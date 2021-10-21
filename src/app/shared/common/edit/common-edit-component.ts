import {EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {CommonComponent} from '../common.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AttachmentService} from '@shared-services/attachment';
import {HandleTaskEvent} from '@shared-common/task';
import {UtilValidate} from '@shared-utils/validate';
import {Auth} from '@shared-services/auth';
import {UtilMisc} from '@shared-utils/misc';
import {EntityFieldValidate} from '@shared-utils/entity';


export abstract class CommonEditComponent extends CommonComponent implements OnInit {
  public route: ActivatedRoute;
  public attachmentService: AttachmentService;
  public location: Location;
  public router: Router;

  @Input() defaultAddValue: any; // 添加数据时的默认值
  @Input() PK: any;
  @Input() handleTaskComponent: any; // 任务办理界面组件

  @Output() dataSavedEvent = new EventEmitter<any>();
  @Output() handleTaskEvent = new EventEmitter<HandleTaskEvent>(); // 启动任务处理事件
  @Output() handleTaskDoneEvent = new EventEmitter<any>(); // 任务处理完成事件


  editDataTemp: any = {}; // 编辑界面表单数据

  segmentCollapseMap: any = {};
  attachList: Array<any> = []; // 附件数据

  // 控制段落卷曲


  ngOnInit() {
    if (this.envService.notShowPopUp) {
      // 添加数据时的默认值通过url传递之前，经过了json序列化，这里需要反序列化为json对象
      this.defaultAddValue = JSON.parse(this.route.snapshot.queryParamMap.get('defaultAddValue'));
      this.PK = this.fieldInfoService.makePKValue(this.route.snapshot.paramMap.get('formPK'));
    } else if (UtilValidate.isNotEmpty(this.PK) && typeof (this.PK) === 'string') {
      // 兼容单主键情况
      this.PK = this.fieldInfoService.makePKValue(this.PK);
    }
    // 如果添加页面被单独使用，则在这里加载下拉框数据
    if (!this.fieldInfoService.selectDataLoaded) {
      this.fieldInfoService.loadSelectDataList();
    }

    if (this.PK) {
      Object.assign(this.editDataTemp, this.PK);
      // 修改
      this.fieldInfoService.getOne({entityName: this.fieldInfoService.queryEntityName, PK: this.PK}).subscribe((oneValue: any) => {
        if (!oneValue.error) {
          Object.assign(this.editDataTemp, oneValue);
          this.afterGetOne();
          this.afterInit();
          if (this.commonService.hasAttachment) {
            this.attachmentService.getAttachmentList(this.fieldInfoService.entityName, this.fieldInfoService.getEntityPK(this.editDataTemp)).subscribe((data: any) => {
              this.attachList = data.list;
            });
          }
        }
      });
    } else {
      // 新增
      if (!this.defaultAddValue) {
        this.defaultAddValue = {};
      }
      this.fieldInfoService.fieldInfo.forEach(field => {
        if (!this.defaultAddValue[field.fieldName]) {
          if (field.defaultValue === '$currentDept') {
            // 填充当前用户
            this.defaultAddValue[field.fieldName] = Auth.userData.deptId;
            this.defaultAddValue[field.fieldName + 'Value'] = Auth.userData.deptName;
          }
          if (field.defaultValue === '$currentUser') {
            // 填充当前用户
            this.defaultAddValue[field.fieldName] = Auth.userData.userLoginId;
            this.defaultAddValue[field.fieldName + 'Value'] = Auth.userData.userName;
          }
          if (field.defaultValue === '$currentDate') {
            // 填充当前日期
            this.defaultAddValue[field.fieldName] = UtilMisc.formatDate(new Date(), 'yyyy-MM-dd');
          }
          if (field.defaultValue === '$currentDatetime') {
            // 填充当前时间
            this.defaultAddValue[field.fieldName] = UtilMisc.formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss');
          }
        }

      });
      // 填充默认值
      this.editDataTemp = this.defaultAddValue;
      this.afterInit();
    }
  }

  uiLabel(field) {
    return this.fieldInfoService.uiLabel(field);
  }

  get inEdit() {
    return !!this.PK;
  }

  // 当前在新增数据
  get inCreate() {
    return !this.inEdit;
  }


  // 保存数据
  saveData() {
    // 扩展数据保存操作功能
    this.observableSaveData().subscribe(() => {
      if (this.envService.notShowPopUp) {
        // 页面跳转方式 新增
        this.location.back();
      }

    });
  }

  // 保存数据并提交审批
  saveAndHandleTask() {
    this.observableSaveData().subscribe((data: any) => {
      let taskId;
      let procInstId;
      if (this.inCreate) {
        taskId = data.taskId;
        procInstId = data.procInstId;
      } else {
        // 编辑流程表单（仅在流程开始节点可以编辑表单）
        taskId = this.editDataTemp.taskId;
        procInstId = this.editDataTemp.procInstId;
      }
      if (this.envService.showPopUp) {
        // 当系统为弹出风格时，弹出流程办理界面
        this.handleTaskEvent.emit({
          taskId,
          procInstId,
          PK: this.fieldInfoService.getEntityPK(data.value),
          handleTaskComponent: this.handleTaskComponent
        });
        // this.popHandleTaskDirective.taskId = taskId;
        // this.popHandleTaskDirective.procInstId = procInstId;
        // this.popHandleTaskDirective.PK = this.fieldInfoService.getEntityPK(data.value);
        // this.popHandleTaskDirective.openView();
        // this.popHandleTaskDirective.handleTaskDoneEvent = this.handleTaskDoneEvent;
      } else {
        // 先跳会主界面，再跳转到流程办理页面
        const arr = this.router.url.split('/');
        this.router.navigateByUrl(arr.slice(0, arr.length - 2).join('/')).then(() => {
          this.router.navigate(['/oa/acttask/handleTask/'
          + this.fieldInfoService.entityName + '/'
          + taskId + '/'
          + procInstId + '/'
          + this.fieldInfoService.getEntityPKValue(data.value) + '']);
        });
      }


    });
  }

  // 由观察者触发保存动作
  observableSaveData(): Observable<object> {
    return new Observable<object>(subscriber => {
      this.beforeValidateAndFormat();

      const validate: EntityFieldValidate = this.fieldInfoService.validateGenericValue(this.editDataTemp);

      this.beforeSubmit(validate);
      if (validate.valid) {
        this.commitToServer().subscribe((data: any) => {
          if (data.error == null) {
            const savedValue = data.value;
            this.afterSave(savedValue);
            this.saveAttach(savedValue);
            this.dataSavedEvent.emit(savedValue);
            subscriber.next(data);
          }
        });
      }
    });
  }

  // 若需要自己保存数据，请在子类重写此方法
  commitToServer(): Observable<object> {
    if (this.commonService.hasFlow && this.inCreate) {
      // 创建流程
      return this.fieldInfoService.http.post('startProcess', {
        entityName: this.fieldInfoService.entityName,
        fieldMap: this.editDataTemp,
        autoPK: true,
        processInstanceKey: this.commonService.processInstanceKey
      });
    } else {
      return this.fieldInfoService.genericSave(this.editDataTemp);
    }
  }

  saveAttach(savedValue) {
    if (this.commonService.hasAttachment) {
      if (this.attachList && this.attachList.length !== 0) {
        // 提交附件
        this.attachmentService.saveAttachment(this.fieldInfoService.entityName, this.fieldInfoService.getEntityPK(savedValue), this.attachList);
      }
    }
  }

  // 在获取编辑数据库后执行，子类可重写
  afterGetOne() {
  }

  /**
   * 在验证与格式化要提交的数据之前执行，子类可重写
   */
  beforeValidateAndFormat() {
  }

  /**
   * 提交数据之前执行，子类可重写
   */
  beforeSubmit(validate: EntityFieldValidate) {
  }

  /**
   * 数据保存成功之后执行，子类可重写
   */
  afterSave(savedValue) {
  }

  /**
   * 界面初始化后执行
   */
  afterInit() {
  }
}
