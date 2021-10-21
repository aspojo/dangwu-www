import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActDemoLeaveFieldInfoService} from '../../act-demo-leave-field-info-service';
import {ViewActDemoLeaveBaseInfoComponent} from './view-act-demo-leave-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewActDemoLeaveBaseInfoComponent],
  exports: [ViewActDemoLeaveBaseInfoComponent],
  providers: [ActDemoLeaveFieldInfoService]
})
export class ViewActDemoLeaveBaseInfoModule {
}
