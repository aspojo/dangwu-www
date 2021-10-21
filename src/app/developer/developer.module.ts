import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {DeveloperRoutingModule} from './developer-routing.module';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    DeveloperRoutingModule,

  ],
})
export class DeveloperModule {
}
