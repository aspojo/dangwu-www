import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DicService} from './shared/services/dic.service';
import {DeptUserService} from './shared/services/dept-user.service';


import * as moment from 'moment';
import {SortablejsModule} from 'ngx-sortablejs';
import {TreeModule} from 'angular-tree-component';
import {NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MyDateAdapter, MyDatepickerI18n, MyDateTimePickerModule, MyNgbDateParserFormatter} from './shared/services/datetime';
import {UEditorModule} from 'ngx-ueditor';
import {environment} from '@environments';
import {EnvironmentService} from './shared/services/environment.service';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {OwlMomentDateTimeModule} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time.module';
import {ComponentMapService} from '@config';
import {HandleTaskModule} from '@shared-common/task';
import {TaskService} from './shared/common/task/task.service';
import {AuthGuard} from '@shared-services/auth';
import {AuthInterceptor} from '@shared-services/auth';
import {AttachmentService} from '@shared-services/attachment';
import {LoadingModel} from '@shared-services/loading';
import {SharedPipesModule} from '@shared-pipes';
import {GeneralGuuard} from './shared/services/auth/general.guuard';


moment.locale('zh-CN');

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    TreeModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule,
    MyDateTimePickerModule.forRoot(),
    SortablejsModule.forRoot({animation: 150}),
    UEditorModule.forRoot({
      options:
        {
          toolbars: [['fontfamily',
            'fontsize',
            'forecolor',
            'justifyleft', // 居左对齐
            'justifyright', // 居右对齐
            'justifycenter', // 居中对齐
            'justifyjustify', // 两端对齐
            'backcolor', 'bold', 'underline', 'italic', 'forecolor', 'link', 'unlink', 'emotion', 'removeformat', 'simpleupload']
          ],
          UEDITOR_HOME_URL: environment.serverHost + 'fadp/plugin/uedit/',
          serverUrl: environment.serverUrl + 'uEditorController',
        },
      // js: ['./assets/uedit/ueditor.config.js', './assets/uedit/ueditor.all.js']
      js: [environment.serverHost + 'fadp/plugin/uedit/ueditor.config.js', environment.serverHost + 'fadp/plugin/uedit/ueditor.all.js']
    }),
    HandleTaskModule.forRoot(),
    LoadingModel.forRoot(),
    SharedPipesModule,
  ],
  declarations: [AppComponent],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: NgbDatepickerI18n, useClass: MyDatepickerI18n},
    {provide: NgbDateParserFormatter, useClass: MyNgbDateParserFormatter},
    {provide: NgbDateAdapter, useClass: MyDateAdapter},
    DicService,
    DeptUserService,
    AttachmentService,
    EnvironmentService,
    ComponentMapService,
    TaskService,
    GeneralGuuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
