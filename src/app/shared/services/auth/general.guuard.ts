import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Auth} from './auth';

@Injectable()
export class GeneralGuuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLogin: boolean;
    // 判断用户是否登入
    if (Auth.userData.generalPartyId) {
      isLogin = false;
      alert('您无法访问');
      this.router.navigateByUrl('/pertymember');
    } else {
      isLogin = true;
    }
    return isLogin;
  }
}
