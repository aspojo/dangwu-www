import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichTextInputComponent} from './rich-text-input.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UEditorModule} from 'ngx-ueditor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UEditorModule,
  ],
  exports: [
    RichTextInputComponent
  ],
  declarations: [RichTextInputComponent]
})
export class RichTextInputModule { }
