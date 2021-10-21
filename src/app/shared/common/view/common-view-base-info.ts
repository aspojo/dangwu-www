import {EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonComponent} from '../common.component';
import {ActivatedRoute} from '@angular/router';
import {UtilValidate} from '@shared-utils/validate';

export abstract class CommonViewBaseInfo extends CommonComponent implements OnInit {
  public route: ActivatedRoute;
  @Input() PK: any; // 主键
  @Output() dataLoadedEvent = new EventEmitter<any>();

  viewDataTemp: any = {};


  ngOnInit() {
    this.init();
  }

  init() {
    if (UtilValidate.isEmpty(this.PK)) {
      if (this.envService.notShowPopUp) {
        this.PK = this.fieldInfoService.makePKValue(this.route.snapshot.paramMap.get('formPK'));
      }
    } else {
      if ((this.PK) === 'string') {
        // 兼容单主键情况
        this.PK = this.fieldInfoService.makePKValue(this.PK);
      }
    }
    this.fieldInfoService.getOne({entityName: this.fieldInfoService.queryEntityName, PK: this.PK}).subscribe((oneValue: any) => {
      if (!oneValue.error) {
        this.viewDataTemp = oneValue;
        this.afterGetOne();
        this.dataLoadedEvent.emit(this.viewDataTemp);
      }
    });
  }

  uiLabel(field) {
    return this.fieldInfoService.uiLabel(field);
  }

  // 在获取编辑数据库后执行，子类可重写
  afterGetOne() {
  }

}
