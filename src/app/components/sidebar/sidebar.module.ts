import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {RouterModule} from '@angular/router';
import {SharedPipesModule} from '@shared-pipes';

@NgModule({
  imports: [
    CommonModule, RouterModule, SharedPipesModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {

}
