import { createAction, props } from '@ngrx/store';
import {Submission} from '../../models/submission.model';



export const LoadAll  = createAction('[Submissions] Load All');
export const LoadAllSuccess = createAction('[Submissions] Load All Success',
    props<{payload: Array<Submission>}>()
);



