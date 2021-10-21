import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {QueryRoutingModule} from './query-routing.module';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '@shared-modules/page-header';
import {CommonSelectModule} from '@shared-modules/select';
import {DateInputModule} from '@shared-modules/input';
import {ConfirmModule} from '@shared-modules/confirm';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    QueryRoutingModule,
    FormsModule,
    PageHeaderModule,
    CommonSelectModule,
    DateInputModule,
    ConfirmModule,
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class QueryModule {
}
