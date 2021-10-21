import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonPopOrPageComponent} from './common-pop-or-page.component';
import {PageHeaderModule} from '@shared-modules/page-header';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PageHeaderModule,
  ],
  declarations: [CommonPopOrPageComponent],
  exports: [CommonPopOrPageComponent]
})
export class CommonPopOrPageModule {
}
