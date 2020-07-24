import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SubmissionsService } from '../../services/submissions.service';
import * as SubmissionsActions from '../actions/submissions.actions';

@Injectable()
export class SubmissionsEffects {
 
  loadAllSubmissions$ = createEffect(() => this.actions$.pipe(
    ofType(SubmissionsActions.LoadAll),
    mergeMap(() => this.submissionsService.loadAllSubmissions()
      .pipe(
        map((submissionsResponse: {data}) => SubmissionsActions.LoadAllSuccess({ payload: submissionsResponse.data})),
        catchError(() => EMPTY)
      ))
    )
  );
 

  submitForm$= createEffect(() => this.actions$.pipe(
    ofType(SubmissionsActions.SubmitForm),
    mergeMap(action => this.submissionsService.submit(action.newSubmission)
    .pipe(map((newSubmissionResponse: {data}) => SubmissionsActions.SubmitFormSuccess({ newSubmission: newSubmissionResponse.data})),
    catchError(() => EMPTY)))
  ));


  constructor(
    private actions$: Actions,
    private submissionsService: SubmissionsService
  ) {}
}