import {NgModule, Query} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ProfessionalRoutingModule} from './professional-routing.module';
import {HighlightJsModule} from 'ngx-highlight-js';
import {PageHeaderModule} from '@shared-modules/page-header';
import {ProfessionalComponent} from './professional.component';
import {CommonSelectModule} from '@shared-modules/select';
import {FormsModule} from '@angular/forms';
import {CommonTypeTreeModule} from '@shared-modules/type-tree';
import {RegionSelectModule} from '@shared-modules/region-select';
import {UploadImageModule} from '@shared-modules/upload-image';
import {ScanInputModule} from '@shared-modules/scan-input';
import {DicSelectModule} from '@shared-modules/dic-select';
import {DateInputModule, DateTimeInputModule, RichTextInputModule} from '@shared-modules/input';
import {ImageViewModule} from '@shared-modules/image-view';
import {TrueFalseSelectModule} from '@shared-modules/true-false-select';
import {UploadFileModule} from '@shared-modules/upload-file';
import {ListDwPertyMemberModule} from '../../query/moreinfo/list-dw-perty-member/list-dw-perty-member.module';
import {ListDwPertyMemberComponent} from '../../query/moreinfo/list-dw-perty-member/list-dw-perty-member.component';
import {ListDwProfessionalModule} from '../../other-entities/dw-professional/list-dw-professional/list-dw-professional.module';
import {ListDwDemocratModule} from '../democrat/list-dw-democrat/list-dw-democrat.module';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    ProfessionalRoutingModule,
    HighlightJsModule,
    PageHeaderModule,
    CommonSelectModule,
    FormsModule,
    CommonTypeTreeModule,
    RegionSelectModule,
    UploadImageModule,
    ScanInputModule,
    DicSelectModule,
    DateInputModule,
    DateTimeInputModule,
    RichTextInputModule,
    ImageViewModule,
    TrueFalseSelectModule,
    UploadFileModule,
    ListDwPertyMemberModule,
    ListDwDemocratModule,
    ListDwProfessionalModule,
  ],
  declarations: [ProfessionalComponent],
  exports: [ProfessionalComponent],
  providers: [ListDwPertyMemberComponent],
})
export class ProfessionalModule {
}
