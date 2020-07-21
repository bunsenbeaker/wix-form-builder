import { createAction, props } from '@ngrx/store';
import {Submission} from '../../models/submission.model';

export const AddSubmissionAction = createAction('[Submissions] Add',
    props<{ submission: Submission }>()
);


export const LoadSubmissionsAction  = createAction('[Submissions] Load All');




