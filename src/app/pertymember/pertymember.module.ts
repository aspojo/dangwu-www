import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {PertymemberRoutingModule} from './pertymember-routing.module';
import {HighlightJsModule} from 'ngx-highlight-js';
import {PageHeaderModule} from '@shared-modules/page-header';
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
import {ListDwPertyMemberModule} from '../query/moreinfo/list-dw-perty-member/list-dw-perty-member.module';
import {ListDwPertyMemberManageModule} from './list-dw-perty-member-manage/list-dw-perty-member-manage.module';
import {ListDwPertyMemberManageComponent} from './list-dw-perty-member-manage/list-dw-perty-member-manage.component';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    PertymemberRoutingModule,
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
    ListDwPertyMemberManageModule,
  ],
  providers: [ListDwPertyMemberManageComponent],
})
export class PertymemberModule {
}
