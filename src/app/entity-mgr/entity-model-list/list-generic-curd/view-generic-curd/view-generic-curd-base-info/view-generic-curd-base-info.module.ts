import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericCurdFieldInfoService} from '../../generic-curd-field-info-service';
import {ViewGenericCurdBaseInfoComponent} from './view-generic-curd-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewGenericCurdBaseInfoComponent],
  exports: [ViewGenericCurdBaseInfoComponent],
  providers: [GenericCurdFieldInfoService]
})
export class ViewGenericCurdBaseInfoModule {
}
