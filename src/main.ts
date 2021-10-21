import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from '@environments';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));

// 解决火狐浏览器下，拖动弹出新搜索窗口的问题
document.body.ondrop = function (event) {
  event.preventDefault();
  event.stopPropagation();
};
