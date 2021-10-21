import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntityEngineComponent} from './entity-engine.component';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '@shared-modules/page-header';
import {HighlightJsModule} from 'ngx-highlight-js';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: EntityEngineComponent}]),
    PageHeaderModule,
    HighlightJsModule,
  ],
  declarations: [EntityEngineComponent],
  exports: [RouterModule]
})
export class EntityEngineModule {
}

