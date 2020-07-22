import { Form } from '../../models/form.model';
import {Action, createReducer, on, State} from '@ngrx/store';
import * as FormsActions from '../actions/forms.actions';


export interface FormsState {

    formslist: Array<Form>;
}

export const initialState: FormsState = {
    formslist: []
};


const formsReducer = createReducer(
    initialState,
    on( FormsActions.CreateNewFormSuccess, (state, {newForm}) => ({...state, formslist: [...state.formslist, newForm]})),
    on(FormsActions.LoadAllSuccess, (state, {payload}) => ({...state, formslist: payload}))
  );



export function reducer(state: FormsState | undefined, action: Action): unknown {
    return formsReducer(state, action);
}




