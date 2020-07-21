import { createAction, props } from '@ngrx/store';
import {Form} from '../../models/form.model';


export const LoadAll  = createAction('[Forms] Load All');
export const CreateNewForm = createAction('[Forms] Add New',
  props<{ newForm: Form }>());

export const LoadAllSuccess = createAction('[Forms] Load All Success',
  props<{payload: Array<Form>}>()
);

