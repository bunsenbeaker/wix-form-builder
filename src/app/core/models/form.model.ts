export interface Form {

    _id: string;
    name: string;
    created: Date;
    submissionsCount: number;
    elements: Array<FormElement>;
}


export interface FormElement{
    type: 'text' |'color' | 'date' | 'email' | 'tel' | 'number';
    name: string;
    label: string;
}
