import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntityListComponent} from './entity-list.component';
import {EntityListRoutingModule} from './entity-list-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SortablejsModule} from 'ngx-sortablejs';
import {ConfirmModule} from '@shared-modules/confirm';
import {PageHeaderModule} from '@shared-modules/page-header';
import {SharedPipesModule} from '@shared-pipes';

@NgModule({
  imports: [
    CommonModule,
    EntityListRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
    NgbModule,
    SortablejsModule,
    FormsModule,
    SharedPipesModule,
  ],
  declarations: [EntityListComponent]
})
export class EntityListModule {
}
