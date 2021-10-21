import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {SortablejsModule} from 'ngx-sortablejs';
import {SelectRoleComponent} from './select-role.component';
import {ConfirmModule} from '../confirm/confirm.module';
import {PageHeaderModule} from '../page-header/page-header.module';
import {DicSelectModule} from '../dic-select/dic-select.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ConfirmModule,
    DicSelectModule,
    SortablejsModule,
  ],
  declarations: [SelectRoleComponent],
  exports: [SelectRoleComponent],
})
export class SelectRoleModule {
}
