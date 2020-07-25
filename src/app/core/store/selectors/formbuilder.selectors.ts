import { createSelector } from '@ngrx/store';
import { Submission } from '../../models/submission.model';
import { Form } from '../../models/form.model';


export const formsFeature = state => state.forms;
export const submissionsFeature = state => state.submissions;



export const selectAllForms = createSelector(
    formsFeature,
    submissionsFeature,
    (forms: Array<Form>, submissions: Array<Submission> ) => {
        return forms.map(f => ({...f, submissoinsCount: submissions.filter(s => s.form_id === f._id).length}));
    }
);

export const selectFormById = createSelector(
    formsFeature,
    (forms: Array<Form>, {formId}) => {
        return forms.find(f => f._id === formId);
    }
);


export const submissionsByFormId = createSelector(submissionsFeature, (state, {formId}) => {

    return state.filter(s => s.form_id === formId);
});


export const submissionsDisplayData = createSelector(submissionsByFormId, selectFormById,
     (submissions: Array<Submission>, form, {formId}) => {

        if (form && form.fields && submissions) {
            const fields = form.fields.map(f => f.name);
            const verifiedSubmissions =  submissions.map(s => {
                return fields.reduce((sub, field) => {
                    const submittedField = s.data.find(f => f.name === field);
                    return submittedField ? {...sub, [field]: submittedField.value} : sub;
                }, {});
            });

            return {fields, data: verifiedSubmissions, form};
        }
    }
);

