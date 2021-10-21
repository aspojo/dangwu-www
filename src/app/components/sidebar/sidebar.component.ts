import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {menuData} from '@config';
import {HttpClient} from '@angular/common/http';
import {UtilValidate} from '@shared-utils/validate';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isActive = false;
  showMenu = '';
  menuList: any = menuData;

  constructor(public router: Router, public http: HttpClient) {
    // 默认展开菜单
    const arr = router.url.split('/');
    arr.splice(0, 1);
    this.showMenu = arr.join('.');
    console.log(this.showMenu);

  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  toggle(menu: string) {
    if (menu === this.showMenu) {// 收起
      this.collapse(menu);
    } else {// 展开
      if (this.showMenu.indexOf(menu) === 0) {// 点击的上级菜单，收起。
        this.collapse(menu);
      } else {
        this.showMenu = menu;
      }
    }
  }

  collapse(menu: string) {
    if (menu.indexOf('.') > -1) {
      this.showMenu = menu.substr(0, menu.lastIndexOf('.'));
    } else {
      this.showMenu = '0';
    }
  }

  expend(path: string) {
    return this.showMenu.indexOf(path) === 0;
  }

  // 按钮点击事件，将http对象传过去，可能要用
  menuClick(clickFun) {
    clickFun(this.http);
  }

  // 构造routerLink
  makeRouterLink(lk) {
    if (UtilValidate.isNotEmpty(lk)) {
      return [lk];
    } else {
      return '';
    }
  }
}
