import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsePermissionComponent} from './use-permission.component';
import {RouterModule} from '@angular/router';
import {HighlightJsModule} from 'ngx-highlight-js';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '@shared-modules/page-header';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UsePermissionComponent}]),
    PageHeaderModule,
    HighlightJsModule,
    FormsModule,
    NgbModule,
  ],
  declarations: [UsePermissionComponent],
  exports: [RouterModule]
})
export class UsePermissionModule {
}

