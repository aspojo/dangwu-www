import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntityModelListComponent} from './entity-model-list.component';
import {EntityModelListRoutingModule} from './entity-model-list-routing.module';
import {ConfirmModule} from '@shared-modules/confirm';
import {PageHeaderModule} from '@shared-modules/page-header';
import {SharedPipesModule} from '@shared-pipes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SortablejsModule} from 'ngx-sortablejs';
import {ShContextMenuModule} from 'ng2-right-click-menu';
import {ImportDataModule} from './import-data/import-data.module';

@NgModule({
  imports: [
    CommonModule,
    EntityModelListRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
    NgbModule,
    SortablejsModule,
    FormsModule,
    SharedPipesModule,
    ShContextMenuModule,
    ImportDataModule,
  ],
  declarations: [EntityModelListComponent]
})
export class EntityModelListModule {
}
