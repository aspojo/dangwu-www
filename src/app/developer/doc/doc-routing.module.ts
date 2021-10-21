import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'intro', loadChildren: './intro/intro.module#IntroModule'},
  {path: 'start', loadChildren: './start/start.module#StartModule'},
  {path: 'dirIntro', loadChildren: './dir-intro/dir-intro.module#DirIntroModule'},
  {path: 'useCodeTool', loadChildren: './use-code-tool/use-code-tool.module#UseCodeToolModule'},
  {path: 'useComponent', loadChildren: './use-component/use-component.module#UseComponentModule'},
  {path: 'useDirective', loadChildren: './use-directive/use-directive.module#UseDirectiveModule'},
  {path: 'useFilter', loadChildren: './use-filter/use-filter.module#UseFilterModule'},
  {path: 'useCodeToolPro', loadChildren: './use-code-tool-pro/use-code-tool-pro.module#UseCodeToolProModule'},
  {path: 'entityEngine', loadChildren: './entity-engine/entity-engine.module#EntityEngineModule'},
  {path: 'complexDevelop', loadChildren: './complex-develop/complex-develop.module#ComplexDevelopModule'},
  {path: 'usePermission', loadChildren: './use-permission/use-permission.module#UsePermissionModule'},
  // {path: 'intro', component: IntroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocRoutingModule {
}
