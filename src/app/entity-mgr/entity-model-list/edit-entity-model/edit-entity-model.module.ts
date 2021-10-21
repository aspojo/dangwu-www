import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditEntityModelComponent} from './edit-entity-model.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditEntityModelRoutingModule} from './edit-entity-model-routing.module';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModule} from '@shared-modules/confirm';
import {SortablejsModule} from 'ngx-sortablejs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    EditEntityModelRoutingModule,
    CommonPopOrPageModule,
    ConfirmModule,
    SortablejsModule,

  ],
  declarations: [EditEntityModelComponent]
})
export class EditEntityModelModule { }
