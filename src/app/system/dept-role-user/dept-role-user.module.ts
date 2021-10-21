import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeptRoleUserComponent} from './dept-role-user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {PageHeaderModule} from '@shared-modules/page-header';
import {TrueFalseSelectModule} from '@shared-modules/true-false-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DeptRoleUserRoutingModule} from './dept-role-user-routing.module';
import {UserComponent} from './user/user.component';
import {RoleComponent} from './role/role.component';
import {UserRoleComponent} from './user-role/user-role.component';

import {SelectDeptComponent} from './select-dept/select-dept.component';
import {UserEditModule} from './user/user-edit/user-edit.module';
import {SortablejsModule} from 'ngx-sortablejs';
import {TreeModule} from 'angular-tree-component';
import {DateInputModule} from '@shared-modules/input';
import {SharedPipesModule} from "@shared-pipes";

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        ConfirmModule,
        DicSelectModule,
        NgbModule,
        DeptRoleUserRoutingModule,
        UserEditModule,
        SortablejsModule,
        TreeModule.forRoot(),
        TrueFalseSelectModule,
        DateInputModule,
        SharedPipesModule,

    ],
  declarations: [
    DeptRoleUserComponent,
    UserComponent,
    RoleComponent,
    UserRoleComponent,
    SelectDeptComponent
  ]
})
export class DeptRoleUserModule {
}
