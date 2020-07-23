import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { FormViewComponent } from './form-view/form-view.component';

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
