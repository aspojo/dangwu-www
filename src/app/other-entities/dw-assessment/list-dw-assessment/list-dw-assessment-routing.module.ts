import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDwAssessmentComponent} from './list-dw-assessment.component';

const routes: Routes = [
    {path: '', component: ListDwAssessmentComponent},
    {path: 'editDwAssessment/:formPK', loadChildren: './edit-dw-assessment/edit-dw-assessment.module#EditDwAssessmentModule'},
    {path: 'viewDwAssessment/:formPK', loadChildren: './view-dw-assessment/view-dw-assessment.module#ViewDwAssessmentModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDwAssessmentRoutingModule {
}
