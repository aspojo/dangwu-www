import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderModule, SidebarModule} from '../components';
import {ListDwPertyMemberModule} from '../query/moreinfo/list-dw-perty-member/list-dw-perty-member.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule, FormsModule, ReactiveFormsModule
    , HeaderModule, SidebarModule, ListDwPertyMemberModule,
    NgbModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule {
}
