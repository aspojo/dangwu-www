import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UseCodeToolProComponent} from './use-code-tool-pro.component';

const routes: Routes = [
    {path: '', component: UseCodeToolProComponent}
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UseCodeToolProRoutingModule {
}
