import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {SystemRoutingModule} from './system-routing.module';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    SystemRoutingModule,

  ],
})
export class SystemModule {
}
