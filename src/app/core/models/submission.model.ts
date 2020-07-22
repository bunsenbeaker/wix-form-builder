export interface Submission {
    submission_id?: string;
    form_id: string;
    submitted: Date;
    data: {[key: string]: string};
}
