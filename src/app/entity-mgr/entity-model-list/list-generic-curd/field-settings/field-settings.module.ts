import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SortablejsModule} from 'ngx-sortablejs';
import {ConfirmModule} from '@shared-modules/confirm';
import {PageHeaderModule} from '@shared-modules/page-header';
import {SharedPipesModule} from '@shared-pipes';
import {FieldSettingsComponent} from './field-settings.component';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
    NgbModule,
    SortablejsModule,
    FormsModule,
    SharedPipesModule
  ],
  exports: [
    FieldSettingsComponent
  ],
  declarations: [FieldSettingsComponent]
})
export class FieldSettingsModule {
}
