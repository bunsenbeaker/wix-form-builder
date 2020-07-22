export interface Form {

    _id?: string;
    name?: string;
    created?: Date;
    submissionsCount?: number;
    fields?: Array<FormField>;
}


export interface FormField{
    input_type: 'text' |'color' | 'date' | 'email' | 'tel' | 'number';
    name: string;
    label: string;
}
