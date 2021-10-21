import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogInfoComponent} from './log-info.component';

const routes: Routes = [
    {path: '', component: LogInfoComponent}
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogInfoRoutingModule {
}
