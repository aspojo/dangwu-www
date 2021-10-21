import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ChartsModule as Ng2Charts} from 'ng2-charts';

import {TimelineComponent} from './components';
import {SharedPipesModule} from '@shared-pipes';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    Ng2Charts,
    SharedPipesModule,
  ],
    declarations: [
        DashboardComponent,
        TimelineComponent
    ]
})
export class DashboardModule {}
