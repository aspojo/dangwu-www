import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirIntroComponent} from './dir-intro.component';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {SharedPipesModule} from '@shared-pipes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DirIntroComponent}]),
    PageHeaderModule,
  ],
  declarations: [DirIntroComponent],
  exports: [RouterModule]
})
export class DirIntroModule {
}

