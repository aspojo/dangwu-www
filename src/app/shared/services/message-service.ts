import {EventEmitter} from '@angular/core';

export class MessageService {
  static alerts: Array<any> = [];

  private static internalNotifyEvent = new EventEmitter<any>();
  // 提醒事件
  public static get notifyEvent(): EventEmitter<any> {
    return this.internalNotifyEvent;
  }

  public static showGlobalMessage(type, msg) {
    const alert = {type, msg};
    if (alert.type !== 'danger') {
      setTimeout(() => {
        MessageService.removeGlobalMessage(alert);
      }, 5000);
    }
    MessageService.alerts.push(alert);
  }

  public static dismissGlobalMessage() {
    MessageService.alerts = [];
  }

  public static removeGlobalMessage(dismissedAlert) {
    const index: number = this.alerts.indexOf(dismissedAlert);
    // 若已经手动关闭了提示信息，则无需理会5秒自动管理的设置。
    if (index > -1) {
      this.alerts.splice(index, 1);
    }
  }

}
