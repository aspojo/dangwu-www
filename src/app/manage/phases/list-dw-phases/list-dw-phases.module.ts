import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule, DateTimeInputModule} from '@shared-modules/input';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDwPhasesRoutingModule} from './list-dw-phases-routing.module';
import {EditDwPhasesModule} from './edit-dw-phases/edit-dw-phases.module';
import {DwPhasesFieldInfoService} from './dw-phases-field-info-service';
import {DwPhasesService} from './dw-phases-service';
import {ViewDwPhasesModule} from './view-dw-phases/view-dw-phases.module';
import {ListDwPhasesComponent} from './list-dw-phases.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateInputModule,
    DateTimeInputModule,
    PageHeaderModule,
    ConfirmModule,
    DicSelectModule,
    CommonViewModule,
    CommonEditModule,
    CommonPopOrPageModule,
    ListDwPhasesRoutingModule,
    EditDwPhasesModule,
    ViewDwPhasesModule
  ],
  declarations: [ListDwPhasesComponent],
  exports: [ListDwPhasesComponent],
  providers: [DwPhasesFieldInfoService, DwPhasesService]
})
export class ListDwPhasesModule {
}
