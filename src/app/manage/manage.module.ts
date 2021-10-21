import {NgModule, Query} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ManageRoutingModule} from './manage-routing.module';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    ManageRoutingModule,

  ],
})
export class ManageModule {
}
