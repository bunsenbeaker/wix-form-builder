import { Component, OnInit, Output, EventEmitter, OnDestroy ,ViewChild } from '@angular/core';
import { FormField } from '../../core/models/form.model';
import { FormGroup, FormBuilder , Validators, FormGroupDirective} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-form-field',
  templateUrl: './add-form-field.component.html',
  styleUrls: ['./add-form-field.component.css']
})
export class AddFormFieldComponent implements OnInit {

  @Output() addField = new EventEmitter<FormField>();
  
  @ViewChild(FormGroupDirective) addFiedForm;

  newFieldGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {

    this.newFieldGroup = this.formBuilder.group({
      name: ['', Validators.required],
      input_type: ['', Validators.required],
      label: ['', Validators.required]
    });
  }


  addFieldClicked(): void {

    const {name, input_type, label} = this.newFieldGroup.value;

    this.addField.emit({name, input_type, label});


    Object.keys(this.newFieldGroup.controls).forEach(key => {

      this.newFieldGroup.get(key).setErrors(null);
    });

    this.addFiedForm.resetForm();
    this.newFieldGroup.reset();
  
  }

}
