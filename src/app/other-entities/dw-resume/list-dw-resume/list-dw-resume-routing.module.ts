import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwResumeComponent} from './list-dw-resume.component';

const routes: Routes = [
    {path: '', component: ListDwResumeComponent},
    {path: 'editDwResume/:formPK', loadChildren: './edit-dw-resume/edit-dw-resume.module#EditDwResumeModule'},
    {path: 'viewDwResume/:formPK', loadChildren: './view-dw-resume/view-dw-resume.module#ViewDwResumeModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwResumeRoutingModule {
}
