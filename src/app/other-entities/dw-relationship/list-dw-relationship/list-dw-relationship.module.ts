import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateInputModule} from '@shared-modules/input';
import {DateTimeInputModule} from '@shared-modules/input';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {UploadFileModule} from '@shared-modules/upload-file';
import {CommonSelectModule} from '@shared-modules/select';
import {SharedPipesModule} from '@shared-pipes';
import {SelectUserModule} from '@shared-modules/select-user';
import {SelectDeptModule} from '@shared-modules/select-dept';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';
import {ListDwRelationshipRoutingModule} from './list-dw-relationship-routing.module';
import {EditDwRelationshipModule} from './edit-dw-relationship/edit-dw-relationship.module';
import {DwRelationshipFieldInfoService} from './dw-relationship-field-info-service';
import {DwRelationshipService} from './dw-relationship-service';
import {ViewDwRelationshipModule} from './view-dw-relationship/view-dw-relationship.module';
import {ListDwRelationshipComponent} from './list-dw-relationship.component';


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
    ListDwRelationshipRoutingModule,
    EditDwRelationshipModule,
    ViewDwRelationshipModule
  ],
  declarations: [ListDwRelationshipComponent],
  exports: [ListDwRelationshipComponent],
  providers: [DwRelationshipFieldInfoService, DwRelationshipService]
})
export class ListDwRelationshipModule {
}
