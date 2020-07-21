import { Submission } from '../../models/submission.model';
import {Action, createReducer, on, State} from '@ngrx/store';
import * as  SubmissionActions from '../actions/submissions.actions';


export interface SubmissionsState {

    submissions: Array<Submission>;
}

export const initialState: SubmissionsState = {
    submissions: []
};

const submissionsReducer = createReducer(
    initialState,
    on( SubmissionActions.LoadSubmissionsAction , state => ({...state})
  ));




export function reducer(state: SubmissionsState | undefined, action: Action): unknown {
    return submissionsReducer(state, action);
}


