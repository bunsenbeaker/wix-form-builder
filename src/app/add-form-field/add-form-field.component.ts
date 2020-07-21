import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormElement } from '../core/models/form.model';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-form-field',
  templateUrl: './add-form-field.component.html',
  styleUrls: ['./add-form-field.component.css']
})
export class AddFormFieldComponent implements OnInit {

  @Output() addField = new EventEmitter<FormElement>();
  
  newFieldGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {

    this.newFieldGroup = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      label: ['', Validators.required]
    });
  }


  addFieldClicked(): void {

    const {name, type, label} = this.newFieldGroup.value;

    this.addField.emit({name, type, label});

    this.newFieldGroup.reset();
    this.newFieldGroup.markAsPristine();
    this.newFieldGroup.markAsUntouched();
  }
  
}
