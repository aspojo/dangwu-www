import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {AuthGuard} from '@shared-services/auth';
import {GeneralGuuard} from '../shared/services/auth/general.guuard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard'},
      {path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
      {path: 'developer', loadChildren: '../developer/developer.module#DeveloperModule'},
      {path: 'system', loadChildren: '../system/system.module#SystemModule'},
      {path: 'test', loadChildren: '../test/test.module#TestModule'},
      {path: 'entityMgr', loadChildren: '../entity-mgr/entity-mgr.module#EntityMgrModule'},
      {path: 'experimentalData', loadChildren: '../experimental-data/experimental-data.module#ExperimentalDataModule'},
      {path: 'query', loadChildren: '../query/query.module#QueryModule'},
      {path: 'pertymember', loadChildren: '../pertymember/pertymember.module#PertymemberModule'},
      {path: 'cadres', loadChildren: '../cadres/cadres.module#CadresModule', canActivate: [GeneralGuuard]},
      {path: 'democrat', loadChildren: '../democrat/democrat.module#DemocratModule', canActivate: [GeneralGuuard]},
      {path: 'manage', loadChildren: '../manage/manage.module#ManageModule'},

    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}

