import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageService} from '@shared-services/message';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  // 任务委派
  taskDelegate(map: any): Observable<object> {
    return new Observable<object>(subscriber => {
      this.http.post('taskDelegate', map).subscribe((data: any) => {
        if (!data.error) {
          MessageService.showGlobalMessage('success', '任务委派成功');
        }
        subscriber.next(data);
      });
    });
  }
  // 删除流程
  removeProcessInstance(selectedList): Observable<object> {
    return this.http.post('removeProcessInstance', {procInstIdList: selectedList});
  }

  // 作废流程
  invalidProcess(procInstIdList) {
    return new Observable<object>(subscriber => {
      this.http.post('invalidProcess', {procInstIdList: procInstIdList}).subscribe((data: any) => {
        if (!data.error) {
          MessageService.showGlobalMessage('success', '作废成功');
          MessageService.notifyEvent.emit(); // 待办提醒数据刷新
          subscriber.next(data);
        }
      });
    });
  }


}
