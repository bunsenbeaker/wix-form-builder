import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './forms/form-builder/form-builder.component';
import { FormsListComponent } from './forms/forms-list/forms-list.component';
import { SubmissionsListComponent } from './submissions/submissions-list/submissions-list.component';
import { FormViewComponent } from './shared/components/form-view/form-view.component';
import { SubmitFormComponent } from './submissions/submit-form/submit-form.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
   { path: 'addform', component: FormBuilderComponent },
   {path: 'forms', component: FormsListComponent},
   {path: 'forms/:id', component: SubmitFormComponent },
   {path: 'submissions/form/:id', component: SubmissionsListComponent},
   {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
