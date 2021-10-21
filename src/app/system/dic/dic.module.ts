import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DicComponent} from './dic.component';
import {DicRoutingModule} from './dic-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SortablejsModule} from 'ngx-sortablejs';
import {TreeModule} from 'angular-tree-component';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';

@NgModule({
  imports: [
    CommonModule,
    DicRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
    NgbModule,
    SortablejsModule,
    TreeModule.forRoot(),

  ],
  declarations: [DicComponent]
})
export class DicModule {
}
