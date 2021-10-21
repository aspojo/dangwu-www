import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SortablejsModule} from 'ngx-sortablejs';
import {CommonTypeTreeComponent} from './common-type-tree.component';
import {ConfirmModule} from '../confirm/confirm.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TreeModule} from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
    SortablejsModule,
    TreeModule.forRoot(),

  ],
  declarations: [CommonTypeTreeComponent],
  exports: [CommonTypeTreeComponent]
})
export class CommonTypeTreeModule {
}
