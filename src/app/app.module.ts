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
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { NewFormWizardComponent } from './new-form-wizard/new-form-wizard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { AddFormFieldComponent } from './add-form-field/add-form-field.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    DynamicInputComponent,
    NewFormWizardComponent,
    AddFormFieldComponent,
    FormViewComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      forms: formsReducer.reducer,
      submissions: submissionsReducer.reducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([FormsEffects]),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
