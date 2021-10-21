import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard'},
  {path: 'codeTool', loadChildren: './code-tool/code-tool.module#CodeToolModule'},
  {path: 'doc', loadChildren: './doc/doc.module#DocModule'},
  {path: 'demo', loadChildren: './demo/list-demo-order/list-demo-order.module#ListDemoOrderModule'},
  {path: 'debugger', loadChildren: './debugger/debugger.module#DebuggerModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperRoutingModule {
}
