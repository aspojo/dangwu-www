import {CommonModule} from '@angular/common';
import {DocRoutingModule} from './doc-routing.module';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '@shared-modules/page-header';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    DocRoutingModule,
    PageHeaderModule,
  ]
})
export class DocModule {
}
