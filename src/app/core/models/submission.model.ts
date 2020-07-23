export interface Submission {
    submission_id?: string;
    form_id: string;
    submitted: Date;
    data?: Array<SubmittedField>;
}


export interface SubmittedField {
    field: string;
    value: string;
}