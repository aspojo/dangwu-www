import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TestRoutingModule} from './test-routing.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    TestRoutingModule,
  ],
})
export class TestModule {
}
