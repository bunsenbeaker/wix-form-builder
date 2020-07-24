import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './forms/form-builder/form-builder.component';
import { FormsListComponent } from './forms/forms-list/forms-list.component';
import { SubmissionsListComponent } from './submissions/submissions-list/submissions-list.component';
import { FormViewComponent } from './shared/components/form-view/form-view.component';

const routes: Routes = [
   { path: 'addform', component: FormBuilderComponent },
   {path: 'forms', component: FormsListComponent},
   {path: 'forms/:id', component: FormViewComponent },
   {path: 'submissions/form/:id', component: SubmissionsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
