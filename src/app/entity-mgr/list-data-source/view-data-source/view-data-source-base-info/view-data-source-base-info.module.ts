import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataSourceFieldInfoService} from '../../data-source-field-info-service';
import {ViewDataSourceBaseInfoComponent} from './view-data-source-base-info.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ViewDataSourceBaseInfoComponent],
  exports: [ViewDataSourceBaseInfoComponent],
  providers: [DataSourceFieldInfoService]
})
export class ViewDataSourceBaseInfoModule {
}
