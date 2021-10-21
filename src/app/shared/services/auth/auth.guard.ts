import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Auth, UserLogin} from './auth';
import {Observable} from 'rxjs';
import {environment} from '@environments';
import {HttpClient} from '@angular/common/http';
import {MqttService} from '@shared-services/mqtt';

@Injectable()
export class AuthGuard implements CanActivate {
  private observable: Observable<boolean>;

  constructor(private router: Router, private http: HttpClient) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.observable = new Observable<boolean>(subscriber => {
      if (!environment.production && Auth.userData == null) {
        this.http.post('ajaxLogin', {
          USERNAME: environment.username
          , PASSWORD: environment.password
        }).subscribe((data: UserLogin) => {
          Auth.userData = data;
          this.getUserData(subscriber);
        });
      } else {
        this.getUserData(subscriber);
      }
    });
    return this.observable;
  }

  getUserData(subscriber) {
    this.http.post('getUserData', {}).subscribe((data: UserLogin) => {
      Auth.userData = data;
      if (data.userLoginId) {
        subscriber.next(true);
        // this.initMqtt();
      } else {
        this.router.navigate(['login']);
        subscriber.next(false);
      }
    });
  }

  // initMqtt() {
  //   MqttService.destroyMqttClient();
  //   const client = MqttService.getMqttClient(Auth.userData);
  //   // 订阅发给自己的消息
  //   client.addTopic(environment.mqttPrefix + Auth.userData.userLoginId);
  //   client.init();
  // }
}
