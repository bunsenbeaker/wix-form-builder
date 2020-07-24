import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as formsReducer from './core/store/reducers/forms.reducer';
import * as submissionsReducer from './core/store/reducers/submissions.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsEffects} from './core/store/effects/forms.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { DynamicInputComponent } from './forms/dynamic-input/dynamic-input.component';
import { NewFormWizardComponent } from './forms/new-form-wizard/new-form-wizard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { AddFormFieldComponent } from './forms/add-form-field/add-form-field.component';
import { FormViewComponent } from './shared/components/form-view/form-view.component';
import { FormBuilderComponent } from './forms/form-builder/form-builder.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsListComponent } from './forms/forms-list/forms-list.component';
import { MatTableModule} from '@angular/material/table';
import { FriendlyDatePipe } from './shared/pipes/friendly-date.pipe';
import { SubmissionsEffects } from './core/store/effects/submissions.effects';
import { SubmissionsListComponent } from './submissions/submissions-list/submissions-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SubmitFormComponent } from './submissions/submit-form/submit-form.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    DynamicInputComponent,
    NewFormWizardComponent,
    AddFormFieldComponent,
    FormViewComponent,
    FormBuilderComponent,
    FormsListComponent,
    FriendlyDatePipe,
    SubmissionsListComponent,
    SubmitFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      forms: formsReducer.reducer,
      submissions: submissionsReducer.reducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([FormsEffects, SubmissionsEffects]),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
