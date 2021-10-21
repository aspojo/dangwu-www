import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HandleTaskComponent} from './handle-task.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UEditorModule} from 'ngx-ueditor';
import {FormsModule} from '@angular/forms';
import {CommonPopOrPageModule} from '../../pop-or-page/common-pop-or-page.module';
import {TaskService} from '../task.service';
import {SharedPipesModule} from '@shared-pipes';
import {SelectUserModule} from '@shared-modules/select-user';
import {ConfirmModule} from '@shared-modules/confirm';
import {RichTextInputModule} from '@shared-modules/input';
import {SelectRoleModule} from '@shared-modules/select-role';
import {PageHeaderModule} from '@shared-modules/page-header';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderModule,
    SelectUserModule,
    NgbModule,
    UEditorModule,
    SharedPipesModule,
    CommonPopOrPageModule,
    ConfirmModule,
    SelectRoleModule,
    RichTextInputModule
  ],
  declarations: [HandleTaskComponent],
  exports: [HandleTaskComponent],
  providers: [ TaskService],
})
export class HandleTaskModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HandleTaskModule,
      providers: [TaskService]
    };
  }
}
