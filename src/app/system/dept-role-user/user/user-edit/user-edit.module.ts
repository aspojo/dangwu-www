import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserEditComponent} from './user-edit.component';
import {FormsModule} from '@angular/forms';
import {ConfirmModule} from '@shared-modules/confirm';
import {DicSelectModule} from '@shared-modules/dic-select';
import {CommonSelectModule} from '@shared-modules/select';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ConfirmModule,
        DicSelectModule,
        NgbModule,
        CommonSelectModule,
    ],
  declarations: [UserEditComponent],
  exports: [UserEditComponent]
})
export class UserEditModule {
}
