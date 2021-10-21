import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeToolComponent} from './code-tool.component';
import {CodeToolRoutingModule} from './code-tool-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SortablejsModule} from 'ngx-sortablejs';
import {ConfirmModule} from '@shared-modules/confirm';
import {PageHeaderModule} from '@shared-modules/page-header';
import {SharedPipesModule} from '@shared-pipes';
import {EntityEditModule} from './entity-edit/entity-edit.module';

@NgModule({
  imports: [
    CommonModule,
    CodeToolRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
    NgbModule,
    SortablejsModule,
    FormsModule,
    SharedPipesModule,
    EntityEditModule,
  ],
  declarations: [CodeToolComponent]
})
export class CodeToolModule {
}
