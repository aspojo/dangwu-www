import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroComponent} from './intro.component';
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
    RouterModule.forChild([{path: '', component: IntroComponent}]),
    PageHeaderModule,
  ],
  declarations: [IntroComponent],
  exports: [RouterModule]
})
export class IntroModule {
}

