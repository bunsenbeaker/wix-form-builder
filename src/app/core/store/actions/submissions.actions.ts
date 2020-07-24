import { createAction, props } from '@ngrx/store';
import {Submission} from '../../models/submission.model';



export const LoadAll  = createAction('[Submissions] Load All');
export const LoadAllSuccess = createAction('[Submissions] Load All Success',
    props<{payload: Array<Submission>}>()
);

export const SubmitForm = createAction('[Submissions] Add New',
    props<{newSubmission: Submission}>()
);

export const SubmitFormSuccess = createAction('[Submissions] Add New Success',
    props<{newSubmission: Submission}>()
)



