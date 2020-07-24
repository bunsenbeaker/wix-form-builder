import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FormsService  } from '../../services/forms.service';
import * as FormsActions from '../actions/forms.actions';
import {ErrorsService} from '../../services/errors.service';

@Injectable()
export class FormsEffects {
 
  loadAllForms$ = createEffect(() => this.actions$.pipe(
    ofType(FormsActions.LoadAll),
    mergeMap(() => this.formsService.loadAllForms()
      .pipe(
        map((formsResponse: {data}) => ({ type: '[Forms] Load All Success', payload: formsResponse.data })),
        catchError(() => {
          this.err.displayError('Error loading forms list. Shit happens, you know...');

          return EMPTY;
        })
      ))
    )
  );
 

  addForm$= createEffect(()=> this.actions$.pipe(
    ofType(FormsActions.CreateNewForm),
    mergeMap(action => this.formsService.addForm(action.newForm)
    .pipe(map((newFormResponse: {data}) => FormsActions.CreateNewFormSuccess({ newForm: newFormResponse.data})),
    catchError(err => {
      this.err.displayError('Error creating new form. It\'s probably your fault anyway ;');

        return EMPTY;

    })))
  ));


  constructor(
    private actions$: Actions,
    private formsService: FormsService,
    private err: ErrorsService
  ) {}

}