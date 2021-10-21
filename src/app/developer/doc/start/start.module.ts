import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartComponent} from './start.component';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {SharedPipesModule} from '@shared-pipes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {SortablejsModule} from 'angular-sortablejs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: StartComponent}]),
    PageHeaderModule,
  ],
  declarations: [StartComponent],
  exports: [RouterModule]
})
export class StartModule {
}

