import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UseCodeToolComponent} from './use-code-tool.component';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ConfirmModule} from '@shared-modules/confirm';
import {SharedPipesModule} from '@shared-pipes';
import {HighlightJsModule} from 'ngx-highlight-js';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UseCodeToolComponent}]),
    PageHeaderModule,
    HighlightJsModule,
  ],
  declarations: [UseCodeToolComponent],
  exports: [RouterModule]
})
export class UseCodeToolModule {
}

