import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Submission, SubmittedField } from '../core/models/submission.model';
import { Form } from '../core/models/form.model';
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
  filledValues: Array<SubmittedField> = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  fieldUpdated(field: {key: string, value: string} ): void {

    this.filledValues.push({field: field.key, value: field.value});

  }


  submitForm(): void {

    this.formSubmitted.emit({
      form_id: this.form._id,
      submitted: new Date(),
      data: this.filledValues
    });

  }
}
