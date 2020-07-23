import { Form } from '../../models/form.model';
import {Action, createReducer, on, State} from '@ngrx/store';
import * as FormsActions from '../actions/forms.actions';


export const initialState: Array<Form> = [];


const formsReducer = createReducer(
    initialState,
    on( FormsActions.CreateNewFormSuccess, (state, {newForm}) => ([...state, newForm])),
    on(FormsActions.LoadAllSuccess, (state, {payload}) => ([...payload]))
  );



export function reducer(state: Array<Form> | undefined, action: Action): unknown {
    return formsReducer(state, action);
}




