import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SortablejsModule} from 'ngx-sortablejs';
import {ConfirmModule} from '@shared-modules/confirm';
import {PageHeaderModule} from '@shared-modules/page-header';
import {SharedPipesModule} from '@shared-pipes';
import {EntityEditComponent} from './entity-edit.component';
import {EntityEditRoutingModule} from './entity-edit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EntityEditRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
    NgbModule,
    SortablejsModule,
    FormsModule,
    SharedPipesModule
  ],
  declarations: [ EntityEditComponent]
})
export class EntityEditModule {
}
