import { Submission } from '../../models/submission.model';
import {Action, createReducer, on, State} from '@ngrx/store';
import * as  SubmissionActions from '../actions/submissions.actions';


export const initialState: Array<Submission> = [];

const submissionsReducer = createReducer(
    initialState,
    on( SubmissionActions.LoadAllSuccess , (state, {payload}) => ([...payload])
  ));




export function reducer(state: Array<Submission> | undefined, action: Action): unknown {
    return submissionsReducer(state, action);
}


