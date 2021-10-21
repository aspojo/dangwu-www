import {Component, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Auth} from '@shared-services/auth';
import {MessageService} from '@shared-services/message';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldSet.component.html',
  styleUrls: ['./fieldSet.component.scss'],

})
export class FieldSetComponent {
  showPopUp: any = false;
  hasBackButton: any = true;
  contentView: any;
  closeViewEvent = new EventEmitter<any>();
  asd = 1;
  project: any = {};
  display: any = {};
  resetData: any = {}; // 用于重置

  constructor(private http: HttpClient, public route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.loadDate();
  }

  loadDate() {
    this.http.post('getDisplayByUser', {userId: Auth.userData.userLoginId}).subscribe((data: any) => {
      if (data.code === '1') {
        this.display = data.dataMap;
        for (let key in this.display) {
          if (key === 'id') {
            continue;
          }
          if (this.display[key] === '0') {
            this.display[key] = 0;
          } else if (this.display[key] === '1') {
            this.display[key] = 1;
          }
        }
        this.resetData = JSON.parse(JSON.stringify(this.display));
      } else if (data.code === '0') {
        MessageService.showGlobalMessage('danger', data.msg);
      }
    });
  }

  save() {
    // 将操作后的boolean改为0和1
    for (let key in this.display) {
      if (key === 'id') {
        continue;
      }
      if (this.display[key] === false) {
        this.display[key] = 0;
      } else if (this.display[key] === true) {
        this.display[key] = 1;
      }
    }
    this.http.post('genericSave', {
      entityName: 'DwPertyMemberDisplay',
      autoPK: true,
      fieldMap: this.display
    }).subscribe((data: any) => {
      if (data.error == null) {
        MessageService.showGlobalMessage('success', '保存成功！');
        this.loadDate();
      }
    });
  }

  reset() {
    this.display = JSON.parse(JSON.stringify(this.resetData));
  }
}
