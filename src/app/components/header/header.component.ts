import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Auth} from '@shared-services/auth';
import {EnvironmentService} from '@shared-services/environment';
import {MessageService} from '@shared-services/message';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {MqttService} from '../../shared/services/mqtt.service';
import {environment} from '@environments';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pushRightClass = 'push-right';
  passwordForm: FormGroup;
  passwordModal: NgbModalRef;
  @ViewChild('chatAudio', {static: false}) chatAudioNode: ElementRef;
  notifyData: any = {taskNotifyData: {num: 0}}; // 通知数据

  constructor(public router: Router, public http: HttpClient, private modalService: NgbModal,
              public envService: EnvironmentService,
  ) {


    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
    const namePassValidator = [Validators.required, Validators.maxLength(11), Validators.minLength(5)];

    this.passwordForm = new FormGroup({
      password: new FormControl('', namePassValidator)
      , newPassword: new FormControl('', namePassValidator)
      , newPasswordVerify: new FormControl('', namePassValidator)
    });

  }

  ngOnInit() {
    // MqttService.getMqttClient(Auth.userData).addEventListener(environment.mqttPrefix + Auth.userData.userLoginId, (message: any) => {
    //   this.chatAudioNode.nativeElement.play();
    //   const msg = JSON.parse(message.payloadString);
    //   if (msg.messageType === 'taskDone') {
    //     MessageService.showGlobalMessage('success', `您的申请【${msg.procName}]已完成`);
    //   } else {
    //     this.getTaskNotifyData();
    //   }
    //
    // });
    // MessageService.notifyEvent.subscribe(() => {
    //   this.getTaskNotifyData();
    // });
    // this.getTaskNotifyData();
  }


  getTaskNotifyData() {
    this.http.post('getTaskNotifyData', {}).subscribe((data: any) => {
      this.notifyData.taskNotifyData = data;
    });
  }

  getNotifyNum(): number {
    let num = 0;
    Object.keys(this.notifyData).forEach((key) => {
      num += this.notifyData[key].num;
    });
    return num;
  }


  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  logout() {
    localStorage.removeItem('isLoggedin');
    this.http.post('ajaxLogout', {}).subscribe();
  }


  get userLogin() {
    return Auth.userData;
  }


  openModal(content) {
    this.passwordModal = this.modalService.open(content);

  }

  changePassword() {
    this.http.post('changePassword', this.passwordForm.value).subscribe((data) => {
      if (!data['error']) {
        MessageService.showGlobalMessage('success', '修改成功');
        this.passwordModal.close();
        this.passwordModal = null;
      }
    });
  }

  get canSubmit() {
    return this.passwordForm.valid && this.passwordForm.value.newPassword === this.passwordForm.value.newPasswordVerify;
  }

  closeModal() {
    this.passwordModal.close();
    this.passwordModal = null;
  }

  changeTheme() {
    environment.showPopUp = !environment.showPopUp;
  }
}
