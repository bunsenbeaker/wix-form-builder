import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FormsService  } from '../../services/forms.service';

@Injectable()
export class FormsEffects {
 
  loadAllForms$ = createEffect(() => this.actions$.pipe(
    ofType('[Forms] Load All'),
    mergeMap(() => this.formsService.loadAllForms()
      .pipe(
        map((formsResponse: {data}) => ({ type: '[Forms] Load All Success', payload: formsResponse.data })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private formsService: FormsService
  ) {}
}