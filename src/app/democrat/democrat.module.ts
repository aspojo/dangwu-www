import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {DemocratRoutingModule} from './democrat-routing.module';
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
import {DemocratComponent} from './democrat.component';
import {CommonViewModule} from '@shared-common/view';
import {CommonEditModule} from '@shared-common/edit';
import {ConfirmModule} from '@shared-modules/confirm';
import {DemocratManageFieldInfoService} from './democrat-manage-field-info-service';
import {DwDemocratService} from '../manage/democrat/list-dw-democrat/dw-democrat-service';
import {DemocratManageService} from './democrat-manage-service';
import {DwPertyMemberManageFieldInfoService} from '../pertymember/list-dw-perty-member-manage/dw-perty-member-manage-field-info-service';
import {EditDemocratManageModule} from './edit-democrat-manage/edit-democrat-manage.module';
import {ViewDemocratManageModule} from './view-democrat-manage/view-democrat-manage.module';
import {DemocratTreeModule} from "../shared/modules/democrat-tree/democrat-tree.module";

@NgModule({
    imports: [
        NgbModule,
        RouterModule,
        CommonModule,
        DemocratRoutingModule,
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
        CommonViewModule,
        CommonEditModule,
        ConfirmModule,
        EditDemocratManageModule,
        ViewDemocratManageModule,
        DemocratTreeModule,
    ],
  declarations: [DemocratComponent],
  exports: [DemocratComponent],
  providers: [DemocratComponent, DemocratManageService, DemocratManageFieldInfoService],
})
export class DemocratModule {
}
