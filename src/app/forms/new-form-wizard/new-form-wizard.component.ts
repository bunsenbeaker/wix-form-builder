import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import { Form, FormField } from '../../core/models/form.model';
import { FormBuilder } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-new-form-wizard',
  templateUrl: './new-form-wizard.component.html',
  styleUrls: ['./new-form-wizard.component.css']
})
export class NewFormWizardComponent implements OnInit, OnDestroy {

  @Output() newFormChanged = new EventEmitter<Form>();
  @Output() newFormWizardCompleted = new EventEmitter();
  @Output() addForm = new EventEmitter();

  newFormNameGroup: FormGroup;

  private newForm: Form = {};

  private unsubscriber = new Subject();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.newFormNameGroup = this.formBuilder.group({
      formName: ['', Validators.required]
    });

    this.newFormNameGroup.get('formName').valueChanges.pipe(takeUntil(this.unsubscriber)).subscribe(newName => {
      this.newForm.name = newName;
      this.newFormUpdated();
    });
  }

  newFormUpdated(): void {
    this.newFormChanged.emit(this.newForm);
  }

  addField(newField: FormField) {

    if (!this.newForm.fields) {
      this.newForm.fields = [];
    }
    this.newForm.fields = [...this.newForm.fields, newField];
    this.newFormUpdated();

  }


  submitNewForm(): void{

    this.addForm.emit();

  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
