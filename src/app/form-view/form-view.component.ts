import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Submission } from '../core/models/submission.model';
import { Form } from '../core/models/form.model';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  @Input() form: Form;

  @Output() formSubmitted = new EventEmitter<Submission>();
  filledValues: {[key: string]: string} = {};

  constructor() { }

  ngOnInit(): void {
  }

  fieldUpdated(field: {key: string, value: string} ): void {

    this.filledValues[field.key] = field.value;

  }


  submitForm(): void {

    this.formSubmitted.emit({
      form_id: this.form._id,
      submitted: new Date(),
      data: this.filledValues
    });
  }
}
