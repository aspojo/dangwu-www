import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ExperimentalDataRoutingModule} from './experimental-data-routing.module';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    ExperimentalDataRoutingModule,

  ],
})
export class ExperimentalDataModule {
}
