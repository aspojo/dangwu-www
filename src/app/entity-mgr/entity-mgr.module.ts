import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {EntityMgrRoutingModule} from './entity-mgr-routing.module';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    EntityMgrRoutingModule,

  ],
})
export class EntityMgrModule {
}
