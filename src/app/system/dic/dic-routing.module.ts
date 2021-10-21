import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DicComponent} from './dic.component';

const routes: Routes = [
    {path: '', component: DicComponent}
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DicRoutingModule {
}
