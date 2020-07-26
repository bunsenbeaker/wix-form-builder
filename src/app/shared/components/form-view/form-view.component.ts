import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Submission, SubmittedField } from '../../../core/models/submission.model';
import { Form } from '../../../core/models/form.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  @Input() form: Form;
  @Input() mode: 'preview'|'active';


  @Output() formSubmitted = new EventEmitter<Submission>();
  
  isValid = false;
  filledValues: Array<SubmittedField> = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  fieldUpdated(updatedField: SubmittedField ): void {

    const existingField: SubmittedField = this.filledValues.find(f => f.name === updatedField.name);
    if (existingField) {
      if (!updatedField.value) {
        this.filledValues = this.filledValues.filter(f => f.name !== updatedField.name);
      }else {
        existingField.value = updatedField.value;
      }
    }else {
        this.filledValues.push(updatedField);
    }

    this.isValid = this.mode === 'active' && this.filledValues.length === this.form.fields.length;
  }


  submitForm(): void {

    this.formSubmitted.emit({
      form_id: this.form._id,
      submitted: new Date(),
      data: this.filledValues
    });

  }
}
