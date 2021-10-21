import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HighlightJsModule} from 'ngx-highlight-js';
import {PageHeaderModule} from '@shared-modules/page-header';
import {CommonSelectModule} from '@shared-modules/select';
import {FormsModule} from '@angular/forms';
import {CommonTypeTreeModule} from '@shared-modules/type-tree';
import {RegionSelectModule} from '@shared-modules/region-select';
import {ScanInputModule} from '@shared-modules/scan-input';
import {DicSelectModule} from '@shared-modules/dic-select';
import {DateInputModule, DateTimeInputModule, RichTextInputModule} from '@shared-modules/input';
import {TrueFalseSelectModule} from '@shared-modules/true-false-select';
import {FieldSetRoutingModule} from './fieldSet-routing.module';
import {FieldSetComponent} from './fieldSet.component';
import {CommonPopOrPageModule} from '@shared-common/pop-or-page';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    FieldSetRoutingModule,
    HighlightJsModule,
    PageHeaderModule,
    CommonSelectModule,
    FormsModule,
    CommonTypeTreeModule,
    RegionSelectModule,
    ScanInputModule,
    DicSelectModule,
    DateInputModule,
    DateTimeInputModule,
    RichTextInputModule,
    TrueFalseSelectModule,
    CommonPopOrPageModule,
  ],
  declarations: [FieldSetComponent],
  exports: [FieldSetComponent],
  providers: [],
})
export class FieldSetModule {
}
