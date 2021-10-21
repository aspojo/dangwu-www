import {environment} from '@environments';
import {Injectable} from '@angular/core';

@Injectable()
export class EnvironmentService {
  // 弹出显示
  public get showPopUp(): boolean {
    return environment.showPopUp;
  }

  // 路由跳转显示
  public get notShowPopUp(): boolean {
    return !this.showPopUp;
  }

  public get testing(): boolean {
    return !environment.production;
  }

  public get serverUrl(): string {
    return environment.serverUrl;
  }

  public get serverHost(): string {
    return environment.serverHost;
  }
  public get title(): string{
    return document.title;
  }
}
